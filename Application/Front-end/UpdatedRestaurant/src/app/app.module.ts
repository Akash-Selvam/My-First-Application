import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantMainComponent } from './restaurant-main/restaurant-main.component';
import { BookingComponent } from './booking/booking.component';
import { RouterModule, Routes} from '@angular/router';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';

import { authInterceptorProviders } from './_helpers/auth.interceptor';
import { UpdateDetailsComponent } from './update-details/update-details.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { ProfileComponent } from './profile/profile.component';
import { BioComponent } from './bio/bio.component';

//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

/*const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'restaurant-main'},
  {path: 'booking', component: BookingComponent},
  {path: 'view', component: ViewDetailsComponent},
];*/

@NgModule({
  declarations: [
    AppComponent,
    RestaurantMainComponent,
    BookingComponent,
    ViewDetailsComponent,
    HomeComponent,
    SignupComponent,
    SigninComponent,
    UpdateDetailsComponent,
    BoardAdminComponent,
    BoardUserComponent,
    ProfileComponent,
    BioComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    MDBBootstrapModule.forRoot(),
    NgbModule,
    Ng2SearchPipeModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [RestaurantMainComponent]
})
export class AppModule { }
