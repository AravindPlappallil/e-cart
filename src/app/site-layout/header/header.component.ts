import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/product/service/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  searchData:any
  constructor(private ds:DataService){

  }

  ngOnInit(): void {
  
  }

  search(event:any){
    this.searchData=event.target.value
    // console.log(this.searchData);

    // send the string data(stream) to object of behaviour subject class
    this.ds.searchInput.next(this.searchData)
    
  }

}
