import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

import { CSSelect } from '../csselect/csselect';
import { CodeSnipped } from '../code-snipped/code-snipped';

@Component({
  selector: 'app-csselect-demo',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CSSelect,
    CodeSnipped
  ],
  templateUrl: './csselect-demo.html',
})
export class CSSelectDemo implements OnInit {

  form = new FormGroup({
    country: new FormControl('', [
      Validators.required
    ])
  });

  options = [
    { label: 'Argentina', value: 'AR' },
    { label: 'Brasil', value: 'BR' },
    { label: 'Chile', value: 'CL' }
  ];

  ngOnInit() {
    this.form.markAllAsTouched();
  }

  htmlExample = `
<form [formGroup]="form">
  <app-csselect
    label="País"
    [control]="form.controls.country"
    [options]="options"
  />
</form>
`;

  tsExample = `
form = new FormGroup({
  country: new FormControl('', [
    Validators.required
  ])
});

options = [
  { label: 'Argentina', value: 'AR' },
  { label: 'Brasil', value: 'BR' },
  { label: 'Chile', value: 'CL' }
];
`;
}