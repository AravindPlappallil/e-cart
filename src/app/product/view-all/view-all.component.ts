import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-view-all',
  templateUrl: './view-all.component.html',
  styleUrls: ['./view-all.component.css']
})
export class ViewAllComponent implements OnInit {

  allProductArray:any
  filterData:any
  searchData:any
    constructor(private ds:DataService ){}

    ngOnInit():void{
      this.ds.viewAllProduct().subscribe((result:any)=>{
        this.allProductArray=result
        console.log(this.allProductArray);
        this.filterData=this.allProductArray
      })

      this.ds.searchInput.subscribe((data:any)=>{
        // console.log(data);
        this.searchData=data
        
      })
    }

    filterProduct(catId:any){
      this.filterData=this.allProductArray.filter(
        (iteam:any)=>iteam.categoryId==catId || catId==""
      )
    }
}
