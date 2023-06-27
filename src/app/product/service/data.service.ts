import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  // object to store incoming data 
  searchInput=new BehaviorSubject('')

  constructor(private http:HttpClient) { }

  // api call to access all product data's
  viewAllProduct(){
    return this.http.get('http://localhost:3000/products')
  }

  // api call to access single product data
  viewProduct(id:any){
    return this.http.get('http://localhost:3000/products/'+id)
  }


  // api to add new product
  addNewProduct(productObject:any){
    return this.http.post('http://localhost:3000/products',productObject)
  }

  // api to delete the product
  deleteProduct(id:any){
    return this.http.delete('http://localhost:3000/products/'+id)
  }

  updateProduct(id:any,pdata:any){
    return this.http.patch('http://localhost:3000/products/'+id,pdata)
  }
}

