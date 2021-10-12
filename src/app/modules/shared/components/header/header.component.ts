import { Component, OnInit, HostListener } from '@angular/core';
import {
  faSearch,
  faBell,
  faCaretDown,
} from '@fortawesome/free-solid-svg-icons';

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
  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    if (window.pageYOffset < 10) {
      this.top = true;
    } else {
      this.top = false;
    }
    console.log(window.pageYOffset);
  }
}
