import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-merchantlogin',
  templateUrl: './merchantlogin.component.html',
  styleUrls: ['./merchantlogin.component.css']
})
export class MerchantloginComponent implements OnInit {

  frmcategory!:FormGroup;
  frmsubcategory!:FormGroup;

  constructor(private fb:FormBuilder,private ds:DataService) {
   }

  ngOnInit(): void {
    this.frmcategory=this.fb.group(
      {
        "catName":this.fb.control(''),
        "catImg":this.fb.control('')
      }
    )

    this.frmsubcategory=this.fb.group(
      {
        "cat":this.fb.group({
          "catId":this.fb.control('')
        }),
        "subcatName":this.fb.control(''),
        "subcatDesc":this.fb.control(''),
        "subcatImg":this.fb.control('')
      }
    )
  }
  
  createcategory()
  {
    this.ds.insertcategory(this.frmcategory.value).subscribe(res=>
      {
        console.log(res);
      })
  }

  createsubcategory()
  {
    console.log(this.frmsubcategory.value);
    this.ds.insertsubcategory(this.frmsubcategory.value).subscribe(res=>
      {
        console.log(res);
      })
  }

}
