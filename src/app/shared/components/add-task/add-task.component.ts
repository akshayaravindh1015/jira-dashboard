import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models';

@Component({
  selector: 'add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
})
export class AddTaskComponent implements OnInit {
  title: string = '';
  desc: string = '';
  @Input() category!: string;
  @Output() onAddNewTask: EventEmitter<Task> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  submit() {
    if (
      !!this.title &&
      !!this.desc &&
      this.title.length > 3 &&
      this.desc.length > 10
    ) {
      this.onAddNewTask.emit({
        id: this.getRandomId(),
        title: this.title,
        desc: this.desc,
        timestamp: new Date(),
        category: this.category,
      });
      this.title = '';
      this.desc = '';
    } else {
      alert('Enter Valid task details');
    }
  }

  getRandomId = () => {
    return Math.random().toString() + Date.now().toString();
  };
}
