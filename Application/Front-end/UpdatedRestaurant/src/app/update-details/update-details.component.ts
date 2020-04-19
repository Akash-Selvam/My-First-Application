import { Component, OnInit } from '@angular/core';
import { BackendService } from '../backend.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-update-details',
  templateUrl: './update-details.component.html',
  styleUrls: ['./update-details.component.scss']
})
export class UpdateDetailsComponent implements OnInit {

  constructor(private http : BackendService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  allData = [];
  id;
  newid;
  newname;
  newemail;
  newnoOfPerson;
  newdate;
  page = 1;
  pageSize =10;


  public fullData()
  {
    this.http.getData()
    .subscribe((backend: any[])=>
    {
      console.log(backend);
      this.allData = backend;
    });
  }

  public delete(data)
  {

    this.id = data.id;
    if(confirm('Are you sure to delete??'))
    {
      this.http.deleteData(this.id)
      this.toastr.success(" You Have Deleted \""+data.name+"\" Successfully!!")
      //this.fullData();
      window.location.reload;
      //this.fullData();
    }
  }

  changeName(id: number, property: string, event: any) {
    this.newname = event.target.textContent;
  }

  changeEmail(id: number, property: string, event: any) {
    this.newemail = event.target.textContent;
  }

  changeNoofpeoples(id: number, property: string, event: any) {
    this.newnoOfPerson = event.target.textContent;
  }

  changeDate(id: number, property: string, event: any) {
    this.newdate = event.target.textContent;
  }

  public edit(data)
  {
    let flag : boolean = true;
    this.newid = data.id;
    if(!this.newname)
    {
      this.newname = data.name;
      flag = false;
    }
    
    if(!this.newemail)
    {
      this.newemail = data.email;
      flag = false;
    }
    if(!this.newnoOfPerson)
    {
      this.newnoOfPerson = data.no_of_peoples;
      flag = false;
    }
    if(!this.newdate)
    {
      this.newdate = data.date;
      flag = false;
    }
    if(flag)
    {
      this.toastr.warning(" No Values Changed!!")
    }
    else
    {
      this.toastr.warning(" Updated Successfully!!")
    }
    //console.log(this.newid,this.newname,this.newemail,this.newnoOfPerson,this.newdate);
    this.http.updateData( this.newid,this.newname,this.newemail,this.newnoOfPerson,this.newdate);
    this.newid = null;
    this.newname = null;
    this.newemail = null;
    this.newnoOfPerson = null;
    this.newdate = null;
    window.location.reload;
  }

}
