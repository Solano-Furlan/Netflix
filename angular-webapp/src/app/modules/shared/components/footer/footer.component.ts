import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  routerUrl: string = this.router.url;
  sub?: Subscription;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.sub = this.router.events.subscribe((e) => {
      if ('url' in e) {
        this.routerUrl = e.url;
      }
    });
  }
}
