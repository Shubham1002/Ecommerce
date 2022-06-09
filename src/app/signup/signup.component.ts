import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Customer } from '../Model/customer';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  FrmGrpmain!:FormGroup;
  counter(i: number) {
    return new Array(i);
}

  constructor(private fb:FormBuilder,private router:Router,private ds:DataService,private snackBar: MatSnackBar) 
  {
  }

  ngOnInit(): void {
    let enmValidatition=Validators.compose(
      [ Validators.required,Validators.email,this.DuplicacyEmailcheck
      ]
    )

    let cnameValidatition=Validators.compose([
      this.isAlphaNUmeric,Validators.required
    ])

    let cageValidatition=Validators.compose([
      this.isagevalid,Validators.required
    ])


    this.FrmGrpmain=this.fb.group(
      {
        "cemail":this.fb.control('',enmValidatition),
        "cpwd":this.fb.control('',Validators.required),
        "cname":this.fb.control('',cnameValidatition),
        "cage":this.fb.control('',cageValidatition),
        "cphno":this.fb.control(''),
        "createddate":this.fb.control(''),
        "address":this.fb.group({
          'addressId':this.fb.control('')
        })
      }
    )  
  }

  DuplicacyEmailcheck(Control:AbstractControl): ValidationErrors|null
  {
    this.ds.DuplicateEmailCheck(Control.value).subscribe(res=>
      {
        if(res == true)
        {
          console.log(res);
          return {DuplicacyEmailcheck:false}
        }
        else
        {
          return {DuplicacyEmailcheck:true}
        }
      });
    return null;
  }

  isAlphaNUmeric(Control:AbstractControl) : ValidationErrors|null{
    let inst=Control.value
    if(!inst.match(/^[a-zA-Z0-9]+$/))
    {
       return {isAlphaNUmeric:false}
    }
    return null
  }

  isagevalid(Control:AbstractControl) : ValidationErrors|null{
    let inst=Control.value
    if(!inst.match(/^[0-9]/))
    {
       return {isagevalid:false}
    }
    return null
  }

  signup()
  {  
    let obj:Customer=this.FrmGrpmain.value;
    this.ds.customersignup(obj).subscribe(res=>
      {
        console.log(res);
        if(res == null)
        {
          this.snackBar.open("Invalid Details");
        }
        else
        {
          this.snackBar.open("Account created Successfully");
          this.router.navigate(["/signupsuccess"]);
        }
      })
  }
}
