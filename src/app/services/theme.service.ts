import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  storedTheme: string | null = localStorage.getItem('active-theme');
  isDarkModeActive!: boolean;

  themeChanged: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.themeChanged.subscribe((value: boolean) => {
      this.isDarkModeActive = value;
    });

    this.checkTheme();
  }

  checkTheme() {
    let theme = localStorage.getItem('active-theme');
    if (!theme) {
      this.storedTheme = 'dark-theme';
      return;
    }

    this.storedTheme = theme;

    console.log(this.storedTheme);
  }

  toggleTheme() {
    this.themeChanged.next(!this.isDarkModeActive);
    this.checkTheme();
    // this.storedTheme = this.isDarkModeActive ? 'dark-theme' : 'light-theme';
    this.setTheme();
  }

  setTheme() {
    // Set theme
    document.body.className =
      this.storedTheme === 'light-theme' ? 'light-theme' : '';
    // Save theme in the local Storage
    localStorage.setItem(
      'active-theme',
      !this.isDarkModeActive ? 'light-theme' : 'dark-theme'
    );
    console.log('DarkTheme:' + this.isDarkModeActive + ' ' + this.storedTheme);
  }
}
