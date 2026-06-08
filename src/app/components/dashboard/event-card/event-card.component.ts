import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Event } from '../../../utils/models/events';

@Component({
  selector: 'app-event-card',
  standalone: false,
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.css',
})
export class EventCardComponent implements OnInit {
  @Input() events!: Event[];
  @Output() eventEdit = new EventEmitter<any>()
  @Output() eventDelete = new EventEmitter<any>()
  currentPage = 1;
  readonly limit = 1;
  startEventId: number = this.events?.[0].id;
  lastEventId = 6;
  paginatedEvents!: Event[];
  get totalPages() {
    return Math.ceil(this.events.length / this.limit);
  }

  ngOnInit(): void {
    console.log(this.events);
    this.paginatedEvents = this.events.slice(this.startEventId - 1, this.lastEventId);
  }

  get pagedEvents() {
    const start = (this.currentPage - 1) * this.limit;
    return this.events.slice(start, start + this.limit);
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