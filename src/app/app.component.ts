import { Component, Input } from '@angular/core';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  template: ` <app-dashboard />`,
  standalone: true,
  imports: [DashboardComponent],
  styleUrl: './app.component.scss',
})
export class AppComponent {}
