import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { FormFieldComponent } from '../form-field/form-field';

@Component({
  selector: 'app-csradio',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormFieldComponent],
  templateUrl: './csradio.html',
  styleUrl: './csradio.css',
})
export class CSRadio {

  @Input() label!: string;
  @Input() control!: FormControl;

  // opciones del radio
  @Input() options: { label: string; value: any }[] = [];

}