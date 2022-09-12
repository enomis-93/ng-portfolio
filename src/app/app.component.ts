import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { fromEvent, Observable, startWith } from 'rxjs';
import { AppRoutingModule } from './app-routing.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  isOnMobileView = false;

  constructor() {}

  ngOnInit(): void {
    if (window.innerWidth <= 768) {
      this.isOnMobileView = true;
    }
    window.onresize = () => (this.isOnMobileView = window.innerWidth <= 768);
  }
}
