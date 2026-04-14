import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { CSCheckbox } from '../cscheckbox/cscheckbox';
import { CodeSnipped } from '../code-snipped/code-snipped';

@Component({
  selector: 'app-cscheckbox-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CSCheckbox,
    CodeSnipped
  ],
  templateUrl: './cscheckbox-demo.html',
  styleUrl: './cscheckbox-demo.css',
})
export class CSCheckboxDemo implements OnInit {

  form = new FormGroup({
    terms: new FormControl(false, [
      Validators.requiredTrue
    ])
  });

  ngOnInit() {
    // 👉 para demo (mostrar error de una)
    this.form.markAllAsTouched();
  }

  htmlExample = `
<form [formGroup]="form">
  <app-cscheckbox
    label="Acepto los términos"
    [control]="form.controls.terms"
  />
</form>
`;

  tsExample = `
form = new FormGroup({
  terms: new FormControl(false, [
    Validators.requiredTrue
  ])
});
`;
}