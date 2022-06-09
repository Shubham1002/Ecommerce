import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Customer } from '../Model/customer';

@Component({
  selector: 'app-myaccount',
  templateUrl: './myaccount.component.html',
  styleUrls: ['./myaccount.component.css']
})
export class MyaccountComponent implements OnInit {

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
