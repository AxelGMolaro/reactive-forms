import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { FormFieldComponent } from '../form-field/form-field';

@Component({
  selector: 'app-csinput-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormFieldComponent],
  templateUrl: './csinput-password.html',
  styleUrl: './csinput-password.css',
})
export class CSInputPassword {

  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() placeholder: string = '';

  show = false;

}