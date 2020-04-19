/*13-->These Components are role-based. But authorization will be processed by back-end.
We only need to call UserService methods:

getUserBoard()
getModeratorBoard()
getAdminBoard()
Here is an example for BoardAdminComponent.
BoardModeratorComponent & BoardUserComponent are similar.

14-->role-admin/role-admin.component.html*/

import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-role-admin',
  templateUrl: './role-admin.component.html',
  styleUrls: ['./role-admin.component.css']
})
export class RoleAdminComponent implements OnInit {

  content = '';

  constructor(private userService: UserService) { }

  ngOnInit(){
    this.userService.getAdminRole().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }
}
