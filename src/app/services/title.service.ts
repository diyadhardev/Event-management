// src/app/core/services/title.service.ts
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Injectable({ providedIn: 'root' })
export class AppTitleService {
  private readonly base = 'EvoEvent';

  constructor(private title: Title) {}

  set(page: string): void {
    this.title.setTitle(`${this.base} - ${page}`);
  }
}