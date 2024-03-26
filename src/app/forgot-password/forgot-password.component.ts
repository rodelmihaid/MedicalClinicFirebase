import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css'],
})
export class ForgotPasswordComponent implements OnInit {
  constructor(
    public authService: AuthService,
    private matIconRegistery: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistery.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/logo.svg')
    );
  }
  ngOnInit() {}
}
