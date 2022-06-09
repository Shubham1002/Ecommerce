import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Customer } from 'src/app/Model/customer';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  cust!:any;
  custdata!:Customer;

  constructor(private ds:DataService) {
    this.cust=localStorage.getItem('customerdata');
    this.ds.getCustomerDatabyid(this.cust).subscribe(res=>{
      this.custdata=res as Customer;
    });
   }

  ngOnInit(): void {
  }

}
