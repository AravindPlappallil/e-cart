import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  constructor(private fb: FormBuilder,private ds:DataService, private router:Router){ }

  addProduct = this.fb.group({
    pid: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pName:['', [Validators.required, Validators.pattern('[0-9a-zA-Z@#$%^&*()_+={}[\]|\\:;"\'<>,.?/~`-+]+')]],
    pCategoryId: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pDescription: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z@#$%^&*()_+={}[\]|\\:;"\'<>,.?/~`-]+')]],
    pPrice: ['', [Validators.required, Validators.pattern('[0-9,]+')]],
    pAvailable: ['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
    pImage: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z@#$%^&*()_+={}[\]|\\:;"\'<>,.?/~`-]+')]],
    pRating: ['', [Validators.required, Validators.pattern('[0-9].+')]],
    pReview: ['', [Validators.required, Validators.pattern('[0-9]+')]],
    pVName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
    pWarrenty: ['', [Validators.required, Validators.pattern('[0-9a-zA-Z ]+')]]
  })
  ngOnInit(){

  }
  addNewProduct(){

    let path= this.addProduct.value
   const newData={ 
    id:path.pid,
    productName:path.pName,
    categoryId:path.pCategoryId,
    description:path.pDescription,
    price:path.pPrice,
    isAvailable:path.pAvailable,
    productImage:path.pImage,
    rating:path.pRating,
    review:path.pReview,
    vendorName:path.pVName,
    warrenty:path.pWarrenty
  }
  this.ds.addNewProduct(newData).subscribe((data:any)=>{
    alert('added new product')
    this.router.navigateByUrl('product')
  })
  }

}
