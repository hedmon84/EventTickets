import { allContacts } from './../mocks/contacts';
import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contacts';
import { ContactService } from '../contact.service';
import { BasketEvents } from '../models/Basket';
import { DataService } from '../core/data.service';
import { Location } from '@angular/common';



@Component({
  selector: 'app-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.css'],

})
export class RootComponent implements OnInit {

  constructor(private contactService: ContactService, private dataService: DataService, private _location: Location) {


  }


  basketitems: BasketEvents[];


  ngOnInit(): void {

    this.dataService.getEvents()
      .subscribe(
        (baskets: BasketEvents[]) => {
          this.basketitems = baskets;
          console.log(baskets);
        },
        error => console.log(error)
      )
  }

  Comprar_basket(event: Event, id_basket: string) {
    event.stopPropagation();
    this.dataService.ComprarBasket(id_basket).subscribe();


  }

}
