import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  email: string = '';

  constructor() {}

  ngOnInit(): void {

  }

  enviarEmail() {
    console.log('email > ', this.email);

  }
}
