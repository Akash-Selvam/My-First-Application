import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  bookings = [
    { name : 'Akash', email : 'akash.msse@gmail.com', noOfPerson: 2, date: '14-02-2020'},
    { name : 'Rekha', email : 'rekha.mbbs@gmail.com', noOfPerson: 2, date: '19-05-2020'}
  ]

  constructor() { }

  public getDetails():Array<{name,email,noOfPerson,date}>
  {
    return this.bookings;
  }

  public createBooking(book:{name,email,noOfPerson,date})
  {
    this.bookings.push(book);
  }
}
