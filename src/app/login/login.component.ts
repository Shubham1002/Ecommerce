import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { Customer } from '../Model/customer';
import { User } from '../Model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  frmGrp!:FormGroup;
  form!:FormGroup;
  cust!:Customer;
  constructor(private fb:FormBuilder,private router:Router,private ds:DataService,private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    let enmValidatition=Validators.compose(
      [ Validators.required,Validators.email
      ]
    )

    this.frmGrp=this.fb.group(
      {
        "email":this.fb.control('',enmValidatition),
        "pwd":this.fb.control('',Validators.required)
      }
    )
  }

  login()
  {
    let obj:User=this.frmGrp.value;
    this.ds.customerlogin(this.frmGrp.value).subscribe(res=>
      {
        if(res==true)
        {
          this.snackBar.open("Login Successfully","x");
          this.ds.getCustomerDatabyemail(this.frmGrp.controls['email'].value).subscribe(res12=>
            {
              this.cust=res12 as Customer;
              localStorage.setItem('customerdata',res12.cId);
            })
            this.router.navigate(["/home"]).then(() => {
              window.location.reload();
            });
        }
        else{
          this.snackBar.open("Incorrect Email Id/Passward","Retry");
          this.router.navigate(["/login"]);
        }
      });
  }

  keeploginchange(ischecked:Boolean)
  {

  }

}
