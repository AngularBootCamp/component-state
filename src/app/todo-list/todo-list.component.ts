import {
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  standalone: true
})
export class TodoListComponent {
  @Input({ required: true }) list!: string[];
  @Input({ required: true }) icon!: string;

  @Output() toggleTask = new EventEmitter<string>();

  toggle(task: string) {
    this.toggleTask.emit(task);
  }
}
