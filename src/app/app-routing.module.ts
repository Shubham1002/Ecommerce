import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import { CompanyuseComponent } from './companyuse/companyuse.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MerchantloginComponent } from './merchantlogin/merchantlogin.component';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { MycartComponent } from './myaccount/mycart/mycart.component';
import { MyordersComponent } from './myaccount/myorders/myorders.component';
import { MyproductreviewComponent } from './myaccount/myproductreview/myproductreview.component';
import { MywishlistComponent } from './myaccount/mywishlist/mywishlist.component';
import { ProfileComponent } from './myaccount/profile/profile.component';
import { SearchComponent } from './search/search.component';
import { SignupComponent } from './signup/signup.component';
import { SignupsuccessComponent } from './signupsuccess/signupsuccess.component';
import { SupportComponent } from './support/support.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  {path:'aboutus',component:AboutusComponent},
  {path:'support',component:SupportComponent},
  {path:'login',component:LoginComponent},
  {path:'signup',component:SignupComponent},
  {path:'companyuse',component:CompanyuseComponent},
  {path:'search',component:SearchComponent},
  {path:'merchantlogin',component:MerchantloginComponent},
  {path:'signupsuccess',component:SignupsuccessComponent},
  {path:'myaccount',component:MyaccountComponent,children:[
    {path:'profile',component:ProfileComponent},
    {path:'cart',component:MycartComponent},
    {path:'orders',component:MyordersComponent},
    {path:'wishlist',component:MywishlistComponent},
    {path:'myproductreview',component:MyproductreviewComponent}
  ]},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
