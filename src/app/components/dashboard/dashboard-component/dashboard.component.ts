import { Component, OnInit } from '@angular/core';
import { categoryOptions, dateFilters, Event, EventsData, EventsViewType } from '../../../utils/models/events';
import { debounceTime, distinctUntilChanged, Subject, takeUntil } from 'rxjs';
import { AppTitleService } from '../../../services/title.service';

@Component({
  selector: 'app-dashboard.component',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent implements OnInit {
  editEventData: any;
  constructor(private appTitle: AppTitleService) { }

  viewType = EventsViewType.CARD;
  otherView = EventsViewType.LIST;
  profileClicked = false;
  EventsViewType = EventsViewType;
  isUpdateEvent = false;
  isDeleteEvent = false;
  deleteEventData?: Event;
  isSearchExpanded = false;
  categories = categoryOptions;
  isFilterExpanded = false;
  selectedDateFilter = ''
  dateFilters = dateFilters;
  selectedFilter = ''
  isSearching = false;
  searchQuery = '';
  events: any[] = EventsData // your events array
  filteredEvents: any[] = [];

  // ✅ Must be declared as a class property
  private searchTerm = new Subject<string>();
  private destroy$ = new Subject<void>();

  ngOnInit(): void {
    this.appTitle.set('Dashboard')
    this.filteredEvents = [...this.events];
    this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      takeUntil(this.destroy$)
    ).subscribe((text) => {
      this.searchQuery = text;
      if (text.trim().length > 0) {
        this.isSearching = true;
        // ✅ Set here — fires only after 300ms pause
        this.filteredEvents = this.events.filter(e =>
          e.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          e.category.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      } else {
        this.isSearching = false;
        this.filteredEvents = [...this.events];
      }
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  profileClickedEvent() {
    this.profileClicked = !this.profileClicked
  }

  onFilterSelect(value: string) {
    this.selectedFilter = value;
  }

  onDateFilterSelect(value: string) {
    this.selectedDateFilter = value;
  }

  showFilterOptions() {
    this.isFilterExpanded = !this.isFilterExpanded;
  }

  onReset() {
    this.isFilterExpanded = false
    this.selectedFilter = ''
    this.selectedDateFilter = ''
  }

  onApply() {
    if (this.selectedFilter) {
      this.filteredEvents = this.events.filter(e => e.category.toLowerCase().includes(this.selectedFilter.toLowerCase()))
    }
    if (this.selectedDateFilter) {
      this.filteredEvents = this.events.filter(e => e.date.toLowerCase().includes(this.selectedDateFilter.toLowerCase()))
    }
    this.isFilterExpanded = false
  }

  onToggleSearch() {
    this.isSearchExpanded = !this.isSearchExpanded;
    if (!this.isSearchExpanded) {
      this.searchQuery = '';
      this.isSearching = false;
      this.filteredEvents = [...this.events];
      // ✅ Also push empty string to reset the subject
      this.searchTerm.next('');
    }
  }

  onSearchBlur() {
    setTimeout(() => {
      if (this.searchQuery.length === 0) {
        this.isSearchExpanded = false;
        this.isSearching = false;
      }
    }, 150);
  }

  onSearchInput(event: globalThis.Event) {
    const target = event.target as HTMLInputElement;
    const value = target.value;

    if (value.trim().length === 0) {
      this.isSearching = false;
      this.filteredEvents = [...this.events];
    }

    this.searchTerm.next(value);
  }

  changeViewType() {
    this.viewType = this.viewType === EventsViewType.CARD ? EventsViewType.LIST : EventsViewType.CARD;
    this.otherView = this.otherView === EventsViewType.CARD ? EventsViewType.CARD : EventsViewType.LIST;
  }

  //Edit events methods

  recieveEditEvent(event: any) {
    console.log(`Edit `)
    console.log(event)
    this.editEventData = event
    this.isUpdateEvent = true;
  }


  // Delete modal methods
  openDeleteModal(eventData: Event) {
    this.deleteEventData = eventData;
    this.isDeleteEvent = true;
  }

  onDeleteConfirmed(eventData: Event) {
    this.events = this.events.filter(e => e.id !== eventData.id);
    this.filteredEvents = this.filteredEvents.filter(e => e.id !== eventData.id);
    this.isDeleteEvent = false;
    this.deleteEventData = undefined;
  }

  onDeleteCancelled() {
    this.isDeleteEvent = false;
    this.deleteEventData = undefined;
  }

  // add new event 

  addNewEvent() {
    this.isUpdateEvent = true;
    this.editEventData = null;
  }

  onEventUpdateCancel() {
    this.isUpdateEvent = false;
  }
}
