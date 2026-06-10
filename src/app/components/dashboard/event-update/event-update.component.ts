import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  HostListener,
  OnInit,
  Output,
  SimpleChanges,
  ChangeDetectorRef,
  OnDestroy,
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { categoryOptions, Event as AppEvent } from '../../../utils/models/events';
import { ImageCroppedEvent } from 'ngx-image-cropper';

@Component({
  selector: 'app-event-update',
  standalone: false,
  templateUrl: './event-update.component.html',
  styleUrl: './event-update.component.css',
})
export class EventUpdateComponent implements OnInit, OnChanges, OnDestroy {
  eventForm!: FormGroup;
  @Output() cancel = new EventEmitter<void>();
  @Input() eventData?: AppEvent;
  selectedCategory = '';
  categoryExpanded: boolean = false;
  categoryOptions = categoryOptions;
  isFileDialogOpen = false;
  preview: string | null = null;
  imageChangedEvent: any = '';
  croppedImage: any = '';
  showCropper = false;

  constructor(private cdr: ChangeDetectorRef) {}
  ngOnInit(): void {
    console.log('Child component CREATED');
    if (!this.eventForm) {
      this.initializeForm();
    }
  }
  ngOnDestroy(): void {
    console.log('Child component DESTROYED');
  }
  onOverlayClick(event: MouseEvent) {
    // Only call cancel if click is directly on the overlay background,
    // NOT on the form container
    if (event.target === event.currentTarget) {
      console.log('Overlay background clicked, calling onCancel');
      this.onCancel();
    }
  }
  // drag and drop for images

  @HostListener('dragover', ['$event'])
  onDragOver(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
  }

  @HostListener('drop', ['$event'])
  onDrop(e: DragEvent) {
    e.preventDefault();
    e.stopPropagation();
    const files = e.dataTransfer?.files;
    if (files && files.length > 0) {
      this.readFile(files[0]);
    }
  }

  onFileSelected(event: Event) {
    console.log('Child: onFileSelected called');
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.imageChangedEvent = event;
      this.showCropper = true;
      this.readFile(input.files[0]);
    }
  }

  readFile(file: File | Blob) {
    const reader = new FileReader();
    reader.onload = (e) => {
      this.preview = e.target?.result as string;
      this.eventForm.patchValue({
        image: this.preview,
      });
      this.eventForm.get('image')?.markAsDirty();
      this.eventForm.get('image')?.markAsTouched();
      this.cdr.detectChanges();
    };
    reader.readAsDataURL(file);
  }

  async imageCropped(event: ImageCroppedEvent) {
    const blob = await event.blob;
    console.log(blob);
    if (!blob) return;
    this.croppedImage = blob;
    console.log(this.croppedImage);
  }
  async saveCrop() {
    console.log('Child: saveCrop called');
    if (!this.croppedImage) return;
    this.readFile(this.croppedImage);
    this.showCropper = false;
    console.log('Child: saveCrop complete, showCropper =', this.showCropper);
  }

  cancelCrop() {
    this.showCropper = false;
    this.croppedImage = '';
    this.preview = null;
    this.imageChangedEvent = '';
  }

  expandCategory() {
    this.categoryExpanded = !this.categoryExpanded;
    if (this.categoryExpanded) {
      this.eventForm.get('category')?.markAsTouched(); // ← add this
    }
  }

  chooseCategory(value: string) {
    console.log(`value${value}`);
    this.selectedCategory = value;
    this.categoryExpanded = false;
    this.eventForm.patchValue({
      category: value,
    });
    this.eventForm.get('category')?.markAsDirty();
    this.eventForm.get('category')?.markAsTouched();
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
    this.selectedCategory = this.eventData?.category || '';
    this.eventForm.patchValue({
      name: this.eventData?.name,
      date: this.eventData?.date,
      category: this.eventData?.category,
      image: this.eventData?.image,
    });
  }

  initializeForm() {
    this.eventForm = new FormGroup({
      image: new FormControl(null, [Validators.required]),
      name: new FormControl('', [Validators.required]),
      date: new FormControl('', [Validators.required]),
      category: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log('Enter submit ');
    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();
      return;
    }
  }
  onCancel() {
    console.log('Child: onCancel called');
    console.log('Child: emitting cancel event');
    this.cancel.emit();
  }
}
