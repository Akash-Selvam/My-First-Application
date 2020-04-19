import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Data } from '@angular/router';
import { BackendService } from '../backend.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.scss']
})
export class ViewDetailsComponent implements OnInit {

  details;
  list;
  allData = [];
  id;
  page = 1;
  pageSize =10;
  term;
  //mySubscription: any;
  

  constructor(public dataservice: DataService, private http : BackendService, private toastr: ToastrService) {
    
   }

  ngOnInit() {
    this.details = this.dataservice.getDetails();
  }

  public fullList(details)
  {
    this.list = details;
  }

  public fullData()
  {
    this.http.getData()
    .subscribe((backend: any[])=>
    {
      console.log(backend);
      this.allData = backend;
    });
  }
}
