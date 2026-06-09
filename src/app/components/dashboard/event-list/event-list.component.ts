import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../../utils/models/events';

@Component({
  selector: 'app-event-list',
  standalone: false,
  templateUrl: './event-list.component.html',
  styleUrl: './event-list.component.css',
})
export class EventListComponent {
  @Input() set events(val: Event[]) {
    this._events = val ?? [];
    this.currentPage = 1; // reset on new data
  }
  @Output() eventEdit = new EventEmitter<any>()
  @Output() eventDelete = new EventEmitter<any>()
  get events(): Event[] { return this._events; }
  private _events: Event[] = [];

  currentPage = 1;
  readonly limit = 6;

  get pagedEvents(): Event[] {
    const start = (this.currentPage - 1) * this.limit;
    return this._events.slice(start, start + this.limit);
  }

  get totalPages(): number {
    return Math.ceil(this._events.length / this.limit);
  }

  get pageNumbers(): (number | '...')[] {
    const total = this.totalPages;
    const current = this.currentPage;
    const pages: (number | '...')[] = [];

    if (total <= 5) {
      for (let i = 1; i <= total; i++) pages.push(i);
    } else {
      pages.push(1);
      if (current > 3) pages.push('...');
      const start = Math.max(2, current - 1);
      const end = Math.min(total - 1, current + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (current < total - 2) pages.push('...');
      pages.push(total);
    }

    return pages;
  }

  goToPage(page: number | '...'): void {
    if (page === '...' || page === this.currentPage) return;
    this.currentPage = page as number;
  }

  prevPage(): void {
    if (this.currentPage > 1) this.currentPage--;
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) this.currentPage++;
  }

  editEvent(event: any) {
    this.eventEdit.emit(event);
  }

  deleteEvent(event: any) {
    this.eventDelete.emit(event);
  }
}