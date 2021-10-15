import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-topic-list',
  templateUrl: './topic-list.component.html',
  styleUrls: ['./topic-list.component.scss'],
})
export class TopicListComponent implements OnInit {
  faPlay = faPlay;
  @Input() title!: string;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  play() {
    this.router.navigate(['/player']);
  }
}
