import { ViewportScroller } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { faAnglesDown, faAnglesUp } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() isOnMobileView!: boolean;
  isMenuOpen: boolean = false;
  userHasScrolled: boolean = false;
  isDarkThemeActive: boolean = this.themeService.storedTheme == 'dark-theme';

  faAnglesDown = faAnglesDown;
  faAnglesUp = faAnglesUp;

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

  constructor(
    private scroller: ViewportScroller,
    private themeService: ThemeService
  ) {}

  ngOnInit(): void {}

  ngOnChanges() {
    this.closeMenuOnScroll();
  }

  closeMenuOnScroll() {
    window.onscroll = () => {
      this.userHasScrolled = true;
      // console.log(this.userHasScrolled);

      if (this.isMenuOpen) {
        // console.log('menu opened');
        if (this.userHasScrolled) {
          // console.log('scrolling while menu is opened');
          this.isMenuOpen = false;
        }
      }
    };
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  toggleTheme(event: any) {
    this.themeService.toggleTheme();
  }

  scrollToComponent(anchor: string) {
    this.scroller.scrollToAnchor(anchor);
  }
}
