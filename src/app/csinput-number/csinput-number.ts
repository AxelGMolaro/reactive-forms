import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { FormFieldComponent } from '../form-field/form-field';

@Component({
  selector: 'app-csinput-number',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormFieldComponent],
  templateUrl: './csinput-number.html',
  styleUrl: './csinput-number.css',
})
export class CSInputNumber {

  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() placeholder: string = '';

}