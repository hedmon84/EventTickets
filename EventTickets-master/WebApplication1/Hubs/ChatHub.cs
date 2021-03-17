using EventTickets.UI.models;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventTickets.UI.Hubs
{
    public class ChatHub : Hub

    {
        public async Task SendMessage(Message msg)
        {
            await Clients.All.SendAsync("ReceiveMessage", msg);
        }
    }
}
