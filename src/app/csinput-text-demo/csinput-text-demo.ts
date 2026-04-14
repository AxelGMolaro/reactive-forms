import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { CSInputText } from '../csinput-text/csinput-text';
import { CodeSnipped } from '../code-snipped/code-snipped';

@Component({
  selector: 'app-csinput-text-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CSInputText,
    CodeSnipped
  ],
  templateUrl: './csinput-text-demo.html',
  styleUrl: './csinput-text-demo.css',
})
export class CSInputTextDemo {

  // 🔥 Form real
  form = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(20),
      Validators.pattern(/^[a-zA-Z\s]+$/)
    ])
  });

  // 📄 Código para mostrar en el snippet
  htmlExample = `
<form [formGroup]="form">
  <app-csinput-text
    label="Nombre"
    [control]="form.controls.name"
    placeholder="Your name"
  />
</form>
`;

  tsExample = `
form = new FormGroup({
  name: new FormControl('', [
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(20),
    Validators.pattern(/^[a-zA-Z\\s]+$/)
  ])
});
`;
}