import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventUpdateComponent } from './event-update/event-update.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard-component/dashboard.component';
import { EventCardComponent } from './event-card/event-card.component';
import { EventListComponent } from './event-list/event-list.component';
import { EventDeleteComponent } from './event-delete/event-delete';
import { NgSelectModule } from '@ng-select/ng-select';
import { ImageCropperComponent } from 'ngx-image-cropper';
@NgModule({
  declarations: [
    EventUpdateComponent,
    DashboardComponent,
    EventCardComponent,
    EventListComponent,
    EventDeleteComponent,
  ],
  imports: [CommonModule, ImageCropperComponent, DashboardRoutingModule, NgSelectModule, FormsModule, ReactiveFormsModule],
})
export class DashboardModule { }
