import { Component, OnInit } from '@angular/core';
import { VariableDeclare } from '../variable-declare';
import { DataService } from '../data.service';
import { ToastrService } from 'ngx-toastr';
import { BackendService } from '../backend.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {


  detail : { name,email,noOfPerson,date } = { name: 'abcd',email: 'abcd@gmail.com',noOfPerson: 1,date: new Date('14-02-2020') };

  constructor(public dataservice: DataService, private toastr: ToastrService, private http : BackendService) { }

  ngOnInit(): void {
  }

  //sample = new VariableDeclare('abcd','abcd@gmail.com',2,'dd-mm-yyyy')

  submitted = false;

  createBooking()
  {
    this.submitted=true;
    console.log(this.detail);
    //this.dataservice.createBooking(this.detail);
    this.toastr.success("Hi "+this.detail.name+" You Have Registered Successfully!!")
    this.http.newData(this.detail.name,this.detail.email,this.detail.noOfPerson,this.detail.date);
    this.detail = { name: 'abcd',email: 'abcd@gmail.com',noOfPerson: 1,date: new Date('2020-02-09') };
    //alert("Registered Successfully!!");
  }
    // TODO: Remove this when we're done
   // get diagnostic() { return JSON.stringify(this.sample); }

}
