import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { Task } from 'src/app/shared/models';
import { AppState } from 'src/app/store';
import {
  addTask,
  deleteList,
  deleteTask,
} from 'src/app/store/dashboard/dashboard.action';
import { taksForList$ } from 'src/app/store/dashboard/dashboard.selector';

@Component({
  selector: 'lists-container',
  templateUrl: './lists-container.component.html',
  styleUrls: ['./lists-container.component.scss'],
})
export class ListsContainerComponent implements OnInit {
  @Input() listName!: string;
  tasks$: Observable<Task[]> = of([]);

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    console.log(this.listName);
    this.tasks$ = this.store.select(taksForList$(this.listName));
    this.tasks$.subscribe((data) => console.log(data));
  }

  addNewTask(task: Task) {
    this.store.dispatch(addTask({ task: task }));
  }
  removeTask(taskId: string) {
    this.store.dispatch(deleteTask({ taskId }));
  }
}
