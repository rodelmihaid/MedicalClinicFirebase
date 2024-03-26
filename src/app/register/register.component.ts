import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  signupForm: FormGroup;
  firebaseErrorMessage: string;

  constructor(
    public authService: AuthService,
    private router: Router,
    private afAuth: AngularFireAuth,
    private matIconRegistery: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.firebaseErrorMessage = '';
    this.matIconRegistery.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/logo.svg')
    );
  }

  ngOnInit(): void {
    this.signupForm = new FormGroup({
      displayName: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });
  }
}
// export class RegisterComponent implements OnInit {
//   constructor(public authService: AuthService) {}
//   ngOnInit() {}
// }
