import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { categoryOptions, Event } from '../../../utils/models/events';

@Component({
  selector: 'app-event-update',
  standalone: false,
  templateUrl: './event-update.component.html',
  styleUrl: './event-update.component.css',
})
export class EventUpdateComponent implements OnInit, OnChanges {

  eventForm!: FormGroup;
  @Output() cancel = new EventEmitter<void>();
  @Input() eventData?: Event;
  selectedCategory = ""
  categoryExpanded: boolean = false;
  categoryOptions = categoryOptions;

  ngOnInit(): void {
    if (!this.eventForm) {
      this.initializeForm()
    }
  }

  expandCategory() {
    this.categoryExpanded = !this.categoryExpanded;
    console.log("True....")
  }

  chooseCategory(value: string) {
    console.log(value)
    this.selectedCategory = value;
    this.categoryExpanded = false
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("EventData....")
    console.log(changes['eventData'].currentValue)
    if (changes['eventData'] && changes['eventData'].currentValue) {
      this.eventData = changes['eventData'].currentValue;
      if (!this.eventForm) {
        console.log("Enter")
        this.initializeForm();
      }
      this.patchForm();
    }
  }

  patchForm() {
    this.eventForm.patchValue({
      name: this.eventData?.name,
      date: this.eventData?.date,
      category: this.eventData?.category
    })
  }

  initializeForm() {
    this.eventForm = new FormGroup({
      image: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required])
    })
  }

  onSubmit() { }
  onCancel() {
    this.cancel.emit();
  }
}
