import { Eventos } from '../models/Event';
export class BasketEvents {

  constructor(

    public basketLineId: string,

    public basketId: string,

    public eventId: string,

    public price: number,

    public ticketAmount: number,

    public event: Eventos,

  ) { }

}
