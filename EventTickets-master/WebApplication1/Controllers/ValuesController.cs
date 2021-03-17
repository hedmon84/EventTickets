using EventTickets.UI.Hubs;
using EventTickets.UI.models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {

        private readonly IHubContext<ChatHub> hub;


        public ValuesController(IHubContext<ChatHub> hub)
        {
            this.hub = hub;
        }

        [HttpGet]
        public async Task Get()
        {
          
            await hub.Clients.All.SendAsync("ReceiveMessage",new Message {user="m",message="Payment Done" });
        }

    }
}
