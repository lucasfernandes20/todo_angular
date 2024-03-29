import { Component, Input } from '@angular/core';
import { TasksType } from '../../pages/dashboard/dashboard.component';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.scss',
})
export class TaskItemComponent {
  @Input() task: TasksType | undefined;
}
