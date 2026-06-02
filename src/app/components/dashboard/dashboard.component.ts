import { Component, OnInit } from '@angular/core';
import { Event, EventsData } from '../../utils/models/events';

@Component({
  selector: 'app-dashboard.component',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  searchTerm: string = ''
  events: Event[] = [];
  updateNewEvent: boolean = false;
  ngOnInit(): void {

  }
  recieveCancelEvent() {
    this.updateNewEvent = false;
  }
  addNewEvent() {
    this.updateNewEvent = true;
  }
  editEvent(event: any) {

  }
  deleteEvent(event: any) { }


}


