import { ViewportScroller } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  @Input() isOnMobileView!: boolean;
  isMenuOpen: boolean = false;

  links: any = [
    {
      pageTitle: 'Home',
      path: '/home',
      anchor: 'home',
    },
    {
      pageTitle: 'About',
      path: '/about',
      anchor: 'about',
    },
    {
      pageTitle: 'Portfolio',
      path: '/portfolio',
      anchor: 'portfolio',
    },
    {
      pageTitle: 'Contacts',
      path: '/contacts',
      anchor: 'contacts',
    },
  ];

  constructor(private scroller: ViewportScroller) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToComponent(anchor: string) {
    this.scroller.scrollToAnchor(anchor);
  }
}
