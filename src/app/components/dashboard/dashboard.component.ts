import { Component, OnInit } from '@angular/core';
import { Event, EventsData, EventsViewTypes } from '../../utils/models/events';

@Component({
  selector: 'app-dashboard.component',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  searchTerm: string = ''
  events: Event[] = EventsData;
  eventsViewType = EventsViewTypes.CARD_VIEW;
  updateNewEvent: boolean = false;

  get EventsViewTypes() {
    return EventsViewTypes;
  }

  get otherViewType() {
    return this.eventsViewType === EventsViewTypes.CARD_VIEW ? EventsViewTypes.LIST_VIEW : EventsViewTypes.CARD_VIEW;
  }

  toggleView() {
    this.eventsViewType = this.eventsViewType === EventsViewTypes.CARD_VIEW ? EventsViewTypes.LIST_VIEW : EventsViewTypes.CARD_VIEW;
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


