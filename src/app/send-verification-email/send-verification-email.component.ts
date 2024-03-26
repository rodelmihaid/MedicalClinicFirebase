import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-send-verification-email',
  templateUrl: './send-verification-email.component.html',
  styleUrls: ['./send-verification-email.component.css'],
})
export class SendVerificationEmailComponent implements OnInit {
  constructor(public authService: AuthService) {}

  ngOnInit(): void {}
}
