import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { CSInputEmail } from '../csinput-email/csinput-email';
import { CodeSnipped } from '../code-snipped/code-snipped';

@Component({
  selector: 'app-csinput-email-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CSInputEmail,
    CodeSnipped
  ],
  templateUrl: './csinput-email-demo.html',
  styleUrl: './csinput-email-demo.css',
})
export class CSInputEmailDemo {

  // 🔥 Form real
  form = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email
    ])
  });

  // 📄 Código para mostrar
  htmlExample = `
<form [formGroup]="form">
  <app-csinput-email
    label="Email"
    [control]="form.controls.email"
    placeholder="your@email.com"
  />
</form>
`;

  tsExample = `
form = new FormGroup({
  email: new FormControl('', [
    Validators.required,
    Validators.email
  ])
});
`;
}