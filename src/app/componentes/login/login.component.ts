import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string = '';

  constructor() {}

  ngOnInit(): void {

  }

  enviarEmail() {
    console.log('email > ', this.email);

  }
}

