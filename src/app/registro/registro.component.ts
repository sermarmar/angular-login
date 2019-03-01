import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { RequiredValidator } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

    form: FormGroup;

  constructor() { }

  ngOnInit() {
      this.form = new FormGroup({
          usuario: new FormControl(null, Validators.required),
          email: new FormControl(null, Validators.required),
          nombre: new FormControl(null, Validators.required),
          apellido1: new FormControl(null, Validators.required),
          apellido2: new FormControl(null),
          dir: new FormControl(null, Validators.required),
          pass: new FormControl(null, Validators.required),
          pass2: new FormControl(null, Validators.required),
      });
  }

  registrar() {
      console.log(this.form.value);
  }

}
