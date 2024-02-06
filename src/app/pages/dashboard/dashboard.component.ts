import { Component } from '@angular/core';
import { TextInputComponent } from '../../components/text-input/text-input.component';
import { TaskItemComponent } from '../../components/task-item/task-item.component';

export interface TasksType {
  id: number;
  name: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TextInputComponent, TaskItemComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  whittenTask = '';
  tasks: TasksType[] = [
    { id: 0, name: 'Sarah' },
    { id: 1, name: 'Amy' },
    { id: 2, name: 'Rachel' },
    { id: 3, name: 'Jessica' },
    { id: 4, name: 'Poornima' },
  ];
}
