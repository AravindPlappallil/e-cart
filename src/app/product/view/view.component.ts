import { Component } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
id:any
pdata:any
  constructor(private ds:DataService, private ar:ActivatedRoute ){}

    ngOnInit():void{
      this.ar.params.subscribe((data:any)=>{
        this.id=data.id
        // console.log(this.id);
        
      })

      this.ds.viewProduct(this.id).subscribe((result:any)=>{
        this.pdata=result
        // console.log(this.pdata);
        
      })
    }


}
