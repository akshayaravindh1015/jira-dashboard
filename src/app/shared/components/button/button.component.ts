import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cust-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Output() onclick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}
  onClick() {
    this.onclick.emit(true);
  }
}
