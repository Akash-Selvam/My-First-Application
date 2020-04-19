import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { error } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})

export class BackendService {

  private listUrl = 'https://localhost:8080';
  constructor(private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  public getData()
  {
    return this.http.get(`http://localhost:8080/api/allList/`)
  }

  public deleteData(id)
  {
    return this.http.delete(`http://localhost:8080/api/delete/`+id)
    .subscribe(
      data => {
        console.log("successfully deleted",data);
      },
      error => {
        console.log("Error", error);
      }
    );
  }

  public updateData(Id,Name,Email,Ppls,Dte)
  {
    this.http.put(`http://localhost:8080/api/update/`+Id,
    {
      "id" : Id,
      "name": Name,
      "email": Email,
      "no_of_peoples": Ppls,
      "date": Dte
    }).subscribe(
      data => {
        console.log("Put request is successfull", data);
      },
      error => {
        console.log("Error", error);
      }
    );
  }

  public newData(Name,Email,Ppls,Dte)
  {
    this.http.post(`http://localhost:8080/api/list/`,
    {
      "name": Name,
      "email": Email,
      "no_of_peoples": Ppls,
      "date": Dte
    }).subscribe(
      data => {
        console.log("Post request is successfull", data);
      },
      error => {
        console.log("Error", error);
      }
    );
  }
}


