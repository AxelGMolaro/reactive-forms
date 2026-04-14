import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { FormFieldComponent } from '../form-field/form-field';

@Component({
  selector: 'app-csinput-email',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormFieldComponent],
  templateUrl: './csinput-email.html',
  styleUrl: './csinput-email.css',
})
export class CSInputEmail {

  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() placeholder: string = '';

}