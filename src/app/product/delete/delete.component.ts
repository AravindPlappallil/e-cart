import { Component, OnInit } from '@angular/core';
import { DataService } from '../service/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.css']
})
export class DeleteComponent implements OnInit {
  pid:any

  constructor(private ds:DataService , private ar:ActivatedRoute, private router:Router){}
  ngOnInit(): void {
    
    this.ar.params.subscribe((data:any)=>{
      this.pid=data['id']
      console.log(this.pid);
      this.ds.deleteProduct(this.pid).subscribe((result:any)=>{
        alert("product deleted")
        this.router.navigateByUrl("")
      })
      
    })
  }

}
