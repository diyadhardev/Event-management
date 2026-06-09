import { Component, Input } from '@angular/core';
import { Event } from '../../../utils/models/events';

@Component({
  selector: 'app-pagination',
  standalone: false,
  templateUrl: './pagination.html',
  styleUrl: './pagination.css',
})
export class Pagination {
  @Input() events:Event[]=[];
  limit=6;
  currentPage=1
  startIndex=0
  endIndex=0
  pages=[];
 

  ngOnInit(){
    if(this.events.length>0){
      let totalEvents=this.events.length;
      let totalPages=Math.ceil(totalEvents/this.limit);
 this.startIndex=this.events?.[0].id;
this.endIndex=this.events.length>this.events![this.limit].id?this.limit:this.events?.[this.events?.length-1].id;

    }
  }

  get totalPages(){
    if(this.events?.length!==0){
    return Math.ceil(this.events!.length/this.limit);   
    }
    return 1;
  }

  paginatedEvents(){

  }
}
