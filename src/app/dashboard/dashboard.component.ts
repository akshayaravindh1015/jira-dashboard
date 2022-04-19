import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../store';
import { addList, deleteList } from '../store/dashboard/dashboard.action';
import { lists$ } from '../store/dashboard/dashboard.selector';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  lists$: Observable<string[]>;

  constructor(private store: Store<AppState>) {
    this.lists$ = this.store.select(lists$);
  }

  ngOnInit(): void {
    this.store.subscribe((data) => console.log(data));
  }

  addANewList(listName: string) {
    this.store.dispatch(addList({ listName }));
  }
  removeList(listName: string) {
    this.store.dispatch(deleteList({ listName }));
  }
}
