import { Injectable } from '@angular/core';
import { allContacts } from './mocks/contacts';
import { Contact } from './models/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private readonly contacts: Contact[] = allContacts;

  constructor() { }




}
