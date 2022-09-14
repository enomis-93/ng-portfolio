import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fromEvent, Observable, startWith } from 'rxjs';
import { ThemeService } from './services/theme.service';
import {
  transition,
  trigger,
  query,
  style,
  animate,
  group,
  animateChild,
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myAnimation', [
      transition('* => *', [
        query(
          ':enter',
          [style({ opacity: 0 }), animate('0.3s', style({ opacity: 1 }))],
          { optional: true }
        ),
        query(
          ':leave',
          [style({ opacity: 1 }), animate('0.3s', style({ opacity: 0 }))],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isOnMobileView = false;
  isThemeDark: boolean = true;
  storedTheme: string | null = this.themeService.storedTheme;

  constructor(private themeService: ThemeService) {
    // Subscribe to Theme Variable to catch theme changed
    this.themeService.themeChanged.subscribe((value) => {
      this.isThemeDark = value;
    });
  }

  ngOnInit(): void {
    // Check if user is connected from mobile device or not
    if (window.innerWidth <= 768) {
      this.isOnMobileView = true;
    }
    window.onresize = () => (this.isOnMobileView = window.innerWidth <= 768);

    this.setTheme();
  }

  setTheme() {
    localStorage.setItem('active-theme', 'dark-theme');
  }
}
