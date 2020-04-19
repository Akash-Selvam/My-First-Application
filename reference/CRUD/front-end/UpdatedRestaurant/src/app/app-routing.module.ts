import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { RestaurantMainComponent } from './restaurant-main/restaurant-main.component';
import { HomeComponent } from './home/home.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


/*const appRoutes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'restaurant-main'},
  {path: 'booking', component: BookingComponent},
  {path: 'view', component: ViewDetailsComponent},
];*/

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'restaurant-main'},
  {path: 'signup', component: SignupComponent},
  {path: 'signin', component: SigninComponent},
  {path: 'home', component: HomeComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'view', component: ViewDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
