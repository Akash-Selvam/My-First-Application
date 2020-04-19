import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-restaurant-main',
  templateUrl: './restaurant-main.component.html',
  styleUrls: ['./restaurant-main.component.scss']
})
export class RestaurantMainComponent implements OnInit {

  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  isadmin = false;
  isuser = false;
  myrole : string;


  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(){
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
      this.myrole = user.roles;
    }

    if(this.myrole ==  "ROLE_ADMIN")
    {
      this.isadmin = true;
    }

    if(this.myrole ==  "ROLE_USER")
    {
      this.isuser = true;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }

}
