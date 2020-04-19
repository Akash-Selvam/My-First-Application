import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-role-moderator',
  templateUrl: './role-moderator.component.html',
  styleUrls: ['./role-moderator.component.css']
})
export class RoleModeratorComponent implements OnInit {

  content = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getModeratorRole().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
  }

}
