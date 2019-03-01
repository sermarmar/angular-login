import { Component, OnInit } from '@angular/core';
import { log } from 'util';
import { RequiredValidator } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material';
import { Usuario } from '../entidad/usuario';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
    user: Usuario;
    form: FormGroup;
    show = false;

  constructor() { }

  ngOnInit() {
      this.form = new FormGroup({
          usuario: new FormControl(null, Validators.required),
          pass: new FormControl(null, Validators.required),
          inCheck:  new FormControl(false)
      });
  }

  accederUsuario() {
      console.log(this.form.value);
  }

}
