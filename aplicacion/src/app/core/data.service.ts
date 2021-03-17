import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { BasketEvents } from '../models/Basket'
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dato: string
  BasketLinesbaseUr: string = "http://localhost:63211/";
  baseUrlid_basket: string = "http://localhost:11111/";
  constructor(private httpClient: HttpClient) {



  }


  getEvents(): Observable<BasketEvents[]> {
    return this.httpClient.get<BasketEvents[]>(`${this.BasketLinesbaseUr}api/BasketLines/all`)
      .pipe(
        catchError(this.handleError)
      );
  }

  ComprarBasket(basketid: string): Observable<void> {

    console.log(basketid);
    return this.httpClient.post<void>(`${this.baseUrlid_basket}api/EventTickets/payment/${basketid}`, 0)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('server error:', error);
    if (error.error instanceof Error) {
      const errorMessage = error.error.message;
      return Observable.throw(errorMessage);
    }

    return Observable.throw(error || 'Server error');
  }


}
