import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from './Model/category';
import { Customer } from './Model/customer';
import { Subcategory } from './Model/subcategory';
import { User } from './Model/user';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private service:HttpClient) { }

  Searchbar(search:string):Observable<any>
  {
    return this.service.get("http://localhost:8910/product/search/"+search);
  }

  customersignup(obj:Customer):Observable<any>
  {
    return this.service.post("http://localhost:8910/customer/save",obj);
  }

  customerlogin(user:User):Observable<any>
  {
    return this.service.post("http://localhost:8910/customer/login",user);
  }

  getCustomerDatabyemail(email:string):Observable<any>
  {
    return this.service.get("http://localhost:8910/customer/e/"+email);
  }

  getCustomerDatabyid(id:number):Observable<any>
  {
    return this.service.get("http://localhost:8910/customer/"+id);
  }

  DuplicateEmailCheck(email:string):Observable<any>
  {
    return this.service.post("http://localhost:8910/emailcheck",email);
  }

  getallCity():Observable<any>
  {
    return this.service.get("http://localhost:8910/city");
  }
  getcitybystate(id:string):Observable<any>
  {
    return this.service.get("http://localhost:8910/state/"+id+"/city");
  }
  getallstates():Observable<any>
  {
    return this.service.get("http://localhost:8910/state");
  }
  getstatebycountry(id:string):Observable<any>
  {
    return this.service.get("http://localhost:8910/country/"+id+"/state");
  }
  getallcountry():Observable<any>
  {
    return this.service.get("http://localhost:8910/country");
  }

  insertcategory(cat:Category):Observable<any>
  {
    return this.service.post("http://localhost:8910/Category/save",cat);
  }
  getallcategory():Observable<any>
  {
    return this.service.get("http://localhost:8910/Category");
  }

  insertsubcategory(cat:Subcategory):Observable<any>
  {
    return this.service.post("http://localhost:8910/subcat/save",cat);
  }

  getallsubcategory():Observable<any>
  {
    return this.service.get("http://localhost:8910/subcat");
  }
}
