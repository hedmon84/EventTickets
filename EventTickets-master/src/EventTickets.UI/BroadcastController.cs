using EventTickets.UI.Hubs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace EventTickets.UI
{
    [Route("api/[controller]")]
    [ApiController]
    public class BroadCastController : ControllerBase
    {
        private readonly IHubContext<ChatHub> hub;

        public BroadCastController(IHubContext<ChatHub> hub)
        {
            this.hub = hub;
        }

        [HttpGet]
        public async Task Get()
        {
            await hub.Clients.All.SendAsync("ReceiveMessage", "chat admin", "Se ha comprado");
        }
    }
}
