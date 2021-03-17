using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using RabbitMQ.Client;
using RabbitMQ.Client.Events;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading;
using System.Threading.Tasks;

namespace EventTickets.Gateway.Background_Services
{
    public class ReceivePaymentConfirmation : BackgroundService
    {
        private readonly ILogger<ReceivePaymentConfirmation> _logger;
        private readonly IConnection _connection;
        private readonly IModel _channel;
        private readonly EventingBasicConsumer _consumer;

        public ReceivePaymentConfirmation(ILogger<ReceivePaymentConfirmation> logger)
        {
            _logger = logger;
            var factory = new ConnectionFactory
            {
                HostName = "localhost",
                Port = 5672
            };
            _connection = factory.CreateConnection();
            _channel = _connection.CreateModel();
            _channel.QueueDeclare("receiver", false, false, false, null);
            _consumer = new EventingBasicConsumer(_channel);
        }

        public override async Task StartAsync(CancellationToken cancellationToken)
        {
            await Task.Delay(60000, cancellationToken);
            _consumer.Received += async (model, content) =>
            {
                var body = content.Body.ToArray();
                var message = Encoding.UTF8.GetString(body);
                await do_something();
            };

            _channel.BasicConsume("receiver", true, _consumer);
        }

        public async Task<string> do_something()
        {
            using (var client = new HttpClient())
            {
                var result = await client.GetStringAsync($"https://localhost:44384/api/Values");
                return result;
            }
        }


        protected override async Task ExecuteAsync(CancellationToken stoppingToken)
        {
            while (!stoppingToken.IsCancellationRequested)
            {
                _logger.LogInformation("Worker running at: {time}", DateTimeOffset.Now);
                await Task.Delay(60000, stoppingToken);
            }
        }
    }
}
