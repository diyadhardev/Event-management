import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Event } from '../../../utils/models/events';

@Component({
  selector: 'app-event-delete',
  standalone: false,
  templateUrl: './event-delete.html',
  styleUrl: './event-delete.css',
})
export class EventDeleteComponent {

  @Input() eventData?: Event;
  @Output() deleteConfirmed = new EventEmitter<Event>();
  @Output() deleteCancelled = new EventEmitter<void>();

  onDelete() {
    if (this.eventData) {
      this.deleteConfirmed.emit(this.eventData);
    }
  }

  onCancel() {
    this.deleteCancelled.emit();
  }
}
