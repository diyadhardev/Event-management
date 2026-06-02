import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from '../../../utils/models/events';

@Component({
  selector: 'app-event-update',
  standalone: false,
  templateUrl: './event-update.component.html',
  styleUrl: './event-update.component.css',
})
export class EventUpdateComponent implements OnInit {
  eventForm!: FormGroup;
  @Output() cancelEventUpdate = new EventEmitter<void>();
  @Input() eventData?: Event = {
    id: '3',
    image: 'https://media.istockphoto.com/id/1317323736/photo/a-view-up-into-the-trees-direction-sky.jpg?s=612x612&w=0&k=20&c=i4HYO7xhao7CkGy7Zc_8XSNX_iqG0vAwNsrH1ERmw2Q=',
    name: 'Dummy Event',
    date: new Date().toISOString().split('T')[0],
    category: 'workshop'
  };
  isEditMode: boolean = false;
  ngOnInit(): void {
    this.initializeEventForm()
    if (this.eventData) {
      console.log('Received event data:', this.eventData);
      this.isEditMode = true;
      this.eventForm.patchValue(this.eventData);
    }
  }
  onCancel() {
    this.cancelEventUpdate.emit();
  }
  initializeEventForm() {
    this.eventForm = new FormGroup({
      image: new FormControl('', [Validators.required]),
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required),
    })
  }

  onSubmit() { }
}
