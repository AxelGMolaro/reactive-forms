import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { CSInputNumber } from '../csinput-number/csinput-number';
import { CodeSnipped } from '../code-snipped/code-snipped';

@Component({
  selector: 'app-csinput-number-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CSInputNumber,
    CodeSnipped
  ],
  templateUrl: './csinput-number-demo.html',
  styleUrl: './csinput-number-demo.css',
})
export class CSInputNumberDemo implements OnInit {

  // 🔥 Form real
  form = new FormGroup({
    age: new FormControl(null, [
      Validators.required,
      Validators.min(18),
      Validators.max(99)
    ])
  });

  ngOnInit() {
    // 👉 para mostrar errores en el demo
    this.form.markAllAsTouched();
  }

  // 📄 HTML para snippet
  htmlExample = `
<form [formGroup]="form">
  <app-csinput-number
    label="Edad"
    [control]="form.controls.age"
    placeholder="18"
  />
</form>
`;

  // 📄 TS para snippet
  tsExample = `
form = new FormGroup({
  age: new FormControl(null, [
    Validators.required,
    Validators.min(18),
    Validators.max(99)
  ])
});
`;
}