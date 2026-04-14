import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { CSTextArea } from '../cstext-area/cstext-area';
import { CodeSnipped } from '../code-snipped/code-snipped';

@Component({
  selector: 'app-cstext-area-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CSTextArea,
    CodeSnipped
  ],
  templateUrl: './cstext-area-demo.html',
})
export class CSTextAreaDemo implements OnInit {

  form = new FormGroup({
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(200)
    ])
  });

  ngOnInit() {
    this.form.markAllAsTouched();
  }

  htmlExample = `
<form [formGroup]="form">
  <app-cstext-area
    label="Descripción"
    [control]="form.controls.description"
    placeholder="Escribí algo..."
  />
</form>
`;

  tsExample = `
form = new FormGroup({
  description: new FormControl('', [
    Validators.required,
    Validators.minLength(10),
    Validators.maxLength(200)
  ])
});
`;
}