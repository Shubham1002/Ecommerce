import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AboutusComponent } from './aboutus/aboutus.component';
import { SupportComponent } from './support/support.component';
import { DataService } from './data.service';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SearchComponent } from './search/search.component';
import { MerchantloginComponent } from './merchantlogin/merchantlogin.component';
import { HomeComponent } from './home/home.component';
import { CompanyuseComponent } from './companyuse/companyuse.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { SignupsuccessComponent } from './signupsuccess/signupsuccess.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MyaccountComponent } from './myaccount/myaccount.component';
import { SignoutComponent } from './signout/signout.component';
import { ProfileComponent } from './myaccount/profile/profile.component';
import { MyordersComponent } from './myaccount/myorders/myorders.component';
import { MycartComponent } from './myaccount/mycart/mycart.component';
import { MywishlistComponent } from './myaccount/mywishlist/mywishlist.component';
import { MyproductreviewComponent } from './myaccount/myproductreview/myproductreview.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutusComponent,
    SupportComponent,
    LoginComponent,
    SignupComponent,
    SearchComponent,
    MerchantloginComponent,
    HomeComponent,
    CompanyuseComponent,
    SignupsuccessComponent,
    MyaccountComponent,
    SignoutComponent,
    ProfileComponent,
    MyordersComponent,
    MycartComponent,
    MywishlistComponent,
    MyproductreviewComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    MatSnackBarModule,
    MatDialogModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
