import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { CSRadio } from '../csradio/csradio';
import { CodeSnipped } from '../code-snipped/code-snipped';

@Component({
  selector: 'app-csradio-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CSRadio,
    CodeSnipped
  ],
  templateUrl: './csradio-demo.html',
})
export class CSRadioDemo implements OnInit {

  form = new FormGroup({
    gender: new FormControl(null, [
      Validators.required
    ])
  });

  options = [
    { label: 'Masculino', value: 'M' },
    { label: 'Femenino', value: 'F' },
    { label: 'Otro', value: 'O' }
  ];

  ngOnInit() {
    this.form.markAllAsTouched();
  }

  htmlExample = `
<form [formGroup]="form">
  <app-csradio
    label="Género"
    [control]="form.controls.gender"
    [options]="options"
  />
</form>
`;

  tsExample = `
form = new FormGroup({
  gender: new FormControl(null, [
    Validators.required
  ])
});

options = [
  { label: 'Masculino', value: 'M' },
  { label: 'Femenino', value: 'F' },
  { label: 'Otro', value: 'O' }
];
`;
}