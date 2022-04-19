import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Task } from '../../models';

@Component({
  selector: 'add-list',
  templateUrl: './add-list.component.html',
  styleUrls: ['./add-list.component.scss'],
})
export class AddListComponent implements OnInit {
  listName: string = '';
  @Output() onAddNewList: EventEmitter<string> = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  submit() {
    if (!!this.listName && this.listName.length > 3) {
      this.onAddNewList.emit(this.listName);
      this.listName = '';
    } else {
      alert('Enter Valid List Name');
    }
  }

  getRandomId = () => {
    return Math.random().toString() + Date.now().toString();
  };
}
