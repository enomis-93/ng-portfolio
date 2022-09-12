import { Component, OnInit } from '@angular/core';
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
    window.onresize = () => (this.isOnMobileView = window.innerWidth <= 768);
  }
}
