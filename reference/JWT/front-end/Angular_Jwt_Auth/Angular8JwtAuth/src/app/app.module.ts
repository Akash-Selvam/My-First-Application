//1-->then import FormsModule & HttpClientModule.
//We also need to add authInterceptorProviders in providers.
//2-->_services/auth.service

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RoleAdminComponent } from './role-admin/role-admin.component';
import { RoleModeratorComponent } from './role-moderator/role-moderator.component';
import { RoleUserComponent } from './role-user/role-user.component';

import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { authInterceptorProviders } from './_helpers/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProfileComponent,
    RoleAdminComponent,
    RoleModeratorComponent,
    RoleUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
