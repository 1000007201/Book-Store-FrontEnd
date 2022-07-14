import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/dataservice/data.service';

@Component({
  selector: 'app-display-book',
  templateUrl: './display-book.component.html',
  styleUrls: ['./display-book.component.scss']
})
export class DisplayBookComponent implements OnInit {
  filterstring:string=''
  @Input() childMessage: any;
  
  constructor(private route:Router, private data:DataService) { }

  ngOnInit(): void {
    this.data.currentSearch.subscribe((search:any)=>{
      console.log(search)
      this.filterstring = search;
    })
  }
  book_by_id(id:any){
    this.route.navigateByUrl('dashboard/book/'+id);
  }
}