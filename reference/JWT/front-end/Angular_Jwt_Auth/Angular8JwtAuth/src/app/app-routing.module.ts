/*15->adding routes
Routes array is passed to the RouterModule.forRoot() method.
We’re gonna use <router-outlet></router-outlet> directive in the App Component where contains navbar and 
display Components (corresponding to routes) content.

  16-->/.component.ts*/

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RoleUserComponent } from './role-user/role-user.component';
import { RoleModeratorComponent } from './role-moderator/role-moderator.component';
import { RoleAdminComponent } from './role-admin/role-admin.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'user', component: RoleUserComponent },
  { path: 'mod', component: RoleModeratorComponent },
  { path: 'admin', component: RoleAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
