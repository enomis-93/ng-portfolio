import { ViewportScroller } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  faAnglesDown,
  faAnglesUp,
  faCircle,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../services/theme.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css', './navbar.mobile.component.css'],
})
export class NavbarComponent implements OnInit, OnChanges {
  @Input() isOnMobileView!: boolean;
  isMenuOpen: boolean = false;
  userHasScrolled: boolean = false;
  isDarkThemeActive: boolean = this.themeService.isDarkModeActive;

  faAnglesDown = faAnglesDown;
  faAnglesUp = faAnglesUp;
  faMoon = faMoon;
  faSun = faCircle;

  settedLang!: string | null;

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
    private themeService: ThemeService,
    private translate: TranslateService
  ) {
    // Transalte config
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }

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

  changeLanguage(language: string, event: any): void {
    localStorage.setItem('lang', language);
    this.settedLang = localStorage.getItem('lang');
    this.translate.use(this.settedLang || 'en');
    // Close option container
    event.target.parentElement.parentElement.parentElement.removeAttribute(
      'open'
    );
  }
}
