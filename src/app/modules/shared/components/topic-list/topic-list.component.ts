import { Component, Input, OnInit } from '@angular/core';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
})
export class TopicListComponent implements OnInit {
  faPlay = faPlay;
  @Input() title!: string;
  constructor() {}

  ngOnInit(): void {}
}
