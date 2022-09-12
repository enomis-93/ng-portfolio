import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ContactService } from './services/contact.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgxHideOnScrollModule } from 'ngx-hide-on-scroll';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    PortfolioComponent,
    ContactsComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    NgxHideOnScrollModule,
  ],
  providers: [ContactService],
  bootstrap: [AppComponent],
})
export class AppModule {}
