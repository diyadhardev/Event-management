import { Component, EventEmitter, Input, OnChanges, HostListener, OnInit, Output, SimpleChanges, ChangeDetectorRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { categoryOptions, Event as AppEvent } from '../../../utils/models/events';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-event-update',
  standalone: false,
  templateUrl: './event-update.component.html',
  styleUrl: './event-update.component.css',
})
export class EventUpdateComponent implements OnInit, OnChanges {

  eventForm!: FormGroup;
  @Output() cancel = new EventEmitter<void>();
  @Input() eventData?: AppEvent;
  selectedCategory = ""
  categoryExpanded: boolean = false;
  categoryOptions = categoryOptions;
  preview: string | null = null;
  imageChangedEvent: any = ''
  croppedImage = ''
  showCropper = false;

  constructor(private cdr: ChangeDetectorRef) { }
  ngOnInit(): void {
    if (!this.eventForm) {
      this.initializeForm()
    }
  }

  // drag and drop for images

  @HostListener('dragover', [' $event'])
  onDragOver(e: DragEvent) {
    e.preventDefault()
    e.stopPropagation()
  }

  @HostListener('drop', [' $event'])
  onDrop(e: DragEvent) {
    e.preventDefault()
    e.stopPropagation()
    const files = e.dataTransfer?.files
    if (files && files.length > 0) {
      this.readFile(files[0]);
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imageChangedEvent = event;
      this.showCropper = true;
      this.readFile(input.files[0]);
    }
  }

  readFile(file: File) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.preview = e.target?.result as string;
      this.cdr.detectChanges()
    }
    reader.readAsDataURL(file);
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64 ?? '';
    console.log(this.croppedImage)
  }

  saveCrop() {
    console.log(`cropped image ${this.croppedImage}`)
    console.log(`preview image ${this.preview}`)
    this.preview = this.croppedImage;
    this.eventForm.patchValue({
      image: this.croppedImage
    });
    this.showCropper = false;
    this.cdr.detectChanges();
  }

  cancelCrop() {
    this.showCropper = false;
    this.croppedImage = '';
    this.preview = null;
    this.imageChangedEvent = '';
  }

  expandCategory() {
    this.categoryExpanded = !this.categoryExpanded;
  }

  chooseCategory(value: string) {
    this.selectedCategory = value;
    this.categoryExpanded = false
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['eventData'] && changes['eventData'].currentValue) {
      this.eventData = changes['eventData'].currentValue;
      if (!this.eventForm) {
        this.initializeForm();
      }
      this.patchForm();
    }
  }

  patchForm() {
    this.preview = this.eventData!.image;
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
