import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { CSInputPassword } from '../csinput-password/csinput-password';
import { CodeSnipped } from '../code-snipped/code-snipped';

@Component({
  selector: 'app-csinput-password-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CSInputPassword,
    CodeSnipped
  ],
  templateUrl: './csinput-password-demo.html',
  styleUrl: './csinput-password-demo.css',
})
export class CSInputPasswordDemo implements OnInit {

  // 🔥 Form real
  form = new FormGroup({
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ])
  });

  ngOnInit() {
    // 👉 para que se vean los errores en el demo
    this.form.markAllAsTouched();
  }

  // 📄 Código HTML para mostrar
  htmlExample = `
<form [formGroup]="form">
  <app-csinput-password
    label="Password"
    [control]="form.controls.password"
    placeholder="Your password"
  />
</form>
`;

  // 📄 Código TS para mostrar
  tsExample = `
form = new FormGroup({
  password: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ])
});
`;
}