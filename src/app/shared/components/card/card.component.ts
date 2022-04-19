import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'cust-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() title!: string;
  @Input() desc: string = '';
  @Input() cardType: 'big' | 'small' = 'small';
  @Input() close = true;

  @Output() deleteCard = new EventEmitter();
  constructor() {}

  ngOnInit(): void {}

  delete() {
    this.deleteCard.emit(true);
  }
}
