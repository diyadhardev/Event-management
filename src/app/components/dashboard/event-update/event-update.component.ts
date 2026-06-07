import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Event } from '../../../utils/models/events';

@Component({
  selector: 'app-event-update',
  standalone: false,
  templateUrl: './event-update.component.html',
  styleUrl: './event-update.component.css',
})
export class EventUpdateComponent implements OnInit,OnChanges {

  eventForm!:FormGroup;
  @Output() cancel=new EventEmitter<void>();
  @Input() eventData?:Event;

  ngOnInit(): void {
   if(!this.eventForm){
     this.initializeForm()
   }
  }

  ngOnChanges(changes: SimpleChanges): void {
      if( changes['eventData'] && changes['eventData'].currentValue){
        this.eventData=changes['eventData'].currentValue;
        if(!this.eventForm){
          console.log("Enter")
      this.initializeForm();
    }
          this.patchForm();
      }
  }
 
  patchForm(){
    this.eventForm.patchValue({
      name:this.eventData?.name,  
      date:this.eventData?.date,
      category:this.eventData?.category     
    })
  }

  initializeForm(){
    this.eventForm=new FormGroup({
      image:new FormControl('',[Validators.required]),
      name:new FormControl('',[Validators.required]),
      date:new FormControl('',[Validators.required]),
      category:new FormControl('',[Validators.required])
    })
  }

  onSubmit(){}
  onCancel(){
    this.cancel.emit();
  }
}
