import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  storedTheme!: string | null;
  isDarkModeActive: boolean =
    localStorage.getItem('active-theme') === 'dark-theme' ? true : false;

  themeChanged: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.checkTheme();

    this.themeChanged.subscribe((value: boolean) => {
      this.isDarkModeActive = value;
    });
  }

  // check if there's theme saved in the storage
  checkTheme() {
    let theme = localStorage.getItem('active-theme');
    if (!theme) {
      localStorage.setItem('active-theme', 'dark-theme');
      this.storedTheme = 'dark-theme';
      this.setTheme();
      return;
    }

    this.storedTheme = theme;
    this.setTheme();
    console.log('Stored theme:' + this.storedTheme);
  }

  toggleTheme() {
    this.themeChanged.next(!this.isDarkModeActive);
    this.storedTheme = this.isDarkModeActive ? 'dark-theme' : 'light-theme';
    this.setTheme();
  }

  // Set theme
  setTheme() {
    document.body.className =
      this.storedTheme === 'light-theme' ? 'light-theme' : '';

    this.storageTheme();
  }

  // Save theme in the local Storage
  storageTheme() {
    localStorage.setItem(
      'active-theme',
      this.storedTheme === 'light-theme' ? 'light-theme' : 'dark-theme'
    );
    console.log('DarkTheme:' + this.isDarkModeActive + ' ' + this.storedTheme);
  }
}
