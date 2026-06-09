import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventUpdateComponent } from './event-update.component/event-update.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { Pagination } from './pagination/pagination';

@NgModule({
  declarations: [EventUpdateComponent, DashboardComponent, Pagination],
  imports: [CommonModule, DashboardRoutingModule, FormsModule, ReactiveFormsModule],
})
export class DashboardModule {}
