/*16->First, we check isLoggedIn status using TokenStorageService, 
if it is true, we get user’s roles and set value for showAdminBoard & showModeratorBoard flag. 
They will control how template navbar displays its items.

The App Component template also has a Logout button link that call logout() method and reload the window.

  17-->app.component.html*/

import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private roles: string[];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username: string;
  title = 'Angular8JwtAuth';
  myrole: string;

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit() {
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
      this.myrole = user.roles;
    }
  }

  logout() {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
