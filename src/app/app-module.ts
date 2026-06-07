import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

import { LoginComponent } from './components/login.component/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboardModule } from './components/dashboard/dashboard-module';

@NgModule({
  declarations: [App, LoginComponent],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule, DashboardModule],
  providers: [provideBrowserGlobalErrorListeners(),Title],
  bootstrap: [App],
})
export class AppModule { }
