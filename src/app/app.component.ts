import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from './data.service';
import { Category } from './Model/category';
import { Customer } from './Model/customer';
import { Subcategory } from './Model/subcategory';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'E-commerce';

  frmGrp!:FormGroup;
  public search123!: string;
  searchresult:any;
  cust!:any;
  custdata!:Customer;
  cat!:Category[];
  subcat!:Subcategory[];

  constructor(private ds:DataService,private router:Router)
  {
    this.cust=localStorage.getItem('customerdata');
    this.ds.getCustomerDatabyid(this.cust).subscribe(res=>{
      this.custdata=res as Customer;
    });

    this.ds.getallcategory().subscribe(res=>{
      this.cat=res as Category[];
      console.log(res);
    });

    this.ds.getallsubcategory().subscribe(res=>{
      this.subcat=res as Subcategory[];
      console.log(res);
    })
  }

  ngOnInit(): void {
  }

  search()
  {
    this.ds.Searchbar(this.search123).subscribe(res=>{
      console.log(this.search123);
      console.log(res);
    });
  }

  signout()
  {
    localStorage.clear();
    this.router.navigate(["/home"]).then(() => {
      window.location.reload();
    });
  }
}
