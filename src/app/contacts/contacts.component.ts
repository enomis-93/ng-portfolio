import { Component, OnInit, OnChanges } from '@angular/core';
import {
  AbstractControl,
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
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  formGroup!: FormGroup;
  submitted: boolean = false;
  hasFormError: boolean = false;
  emailPattern =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

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

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {}

  ngOnInit(): void {
    this.formGroup = this.formBuilder.group({
      name: [
        '',
        Validators.compose([Validators.required, Validators.minLength(3)]),
      ],
      email: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(this.emailPattern),
        ]),
      ],
      message: [
        '',
        Validators.compose([Validators.required, Validators.minLength(10)]),
      ],
      acceptTerms: [false, Validators.requiredTrue],
    });
  }

  get form(): { [key: string]: AbstractControl } {
    return this.formGroup.controls;
  }

  get email() {
    return this.formGroup.get('email');
  }

  get name() {
    return this.formGroup.get('name');
  }

  get message() {
    return this.formGroup.get('message');
  }

  onSubmit(form: FormGroup) {
    this.submitted = true;
    setInterval(() => {
      this.submitted = false;
    }, 3000);

    if (form.valid) {
      this.http
        .post('https://formspree.io/f/xlevgoqz', form.value)
        .subscribe((res) => console.log(res));
      form.reset();
    } else {
      // Not-used for the moment because the send button is disabled until the form is invalid
      this.hasFormError = true;
    }
  }
}
