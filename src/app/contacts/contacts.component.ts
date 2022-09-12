import { Component, OnInit } from '@angular/core';
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
import { ContactService } from '../services/contact.service';

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
  constructor(private builder: FormBuilder, private contact: ContactService) {}

  ngOnInit(): void {
    this.FormData = this.builder.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      message: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(FormData: FormData) {
    console.log(FormData);
  }
}
