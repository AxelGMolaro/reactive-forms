import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { FormFieldComponent } from '../form-field/form-field';

@Component({
  selector: 'app-cstext-area',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormFieldComponent],
  templateUrl: './cstext-area.html',
  styleUrl: './cstext-area.css',
})
export class CSTextArea {

  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() placeholder: string = '';
  @Input() rows: number = 4;

}