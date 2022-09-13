import { Component, OnInit, OnChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  FormData!: FormGroup;

  whatsappLink: string =
    'https://wa.me/393383748792?text=Hi,%20I%20would%20contact%20you';
  linkedinLink: string = 'https://www.linkedin.com/in/manenti-simone/';
  gitHubLink: string = 'https://github.com/enomis-93';
  emailString = 'mailto:manenti.simone@virgilio.it';

  faWhatsapp = faWhatsapp;
  faLinkedin = faLinkedin;
  faGithub = faGithub;
  faMail = faEnvelope;

  // isThemeDark: boolean = true;

  constructor(
    private builder: FormBuilder,
    private themeService: ThemeService
  ) {
    // Subscribe to Theme Variable to catch theme changed
    // this.themeService.themeChanged.subscribe((value) => {
    //   this.isThemeDark = value;
    // });
  }

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  // Obtain theme variable from service
  // get isDarkTheme(): boolean {
  //   return this.themeService.isDarkModeActive;
  // }

  onSubmit(FormData: FormData) {
    console.log(FormData);
  }
}
