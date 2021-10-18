import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import {
  faSearch,
  faBell,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  faSearch = faSearch;
  faCaretDown = faCaretDown;
  faBell = faBell;
  top = true;
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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset < 10) {
      this.top = true;
    } else {
      this.top = false;
    }
  }
}
