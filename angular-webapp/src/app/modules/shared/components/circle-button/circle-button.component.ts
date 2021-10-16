import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-circle-button',
  templateUrl: './circle-button.component.html',
  styleUrls: ['./circle-button.component.scss'],
})
export class CircleButtonComponent implements OnInit {
  @Input() fill = false;
  @Input() toolip_text!: string;
  @Output() onClick = new EventEmitter();
  faPlay = faPlay;

  constructor() {}

  ngOnInit(): void {}

  onClickFunction() {
    this.onClick.emit();
  }
}
