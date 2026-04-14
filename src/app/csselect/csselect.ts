import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { FormFieldComponent } from '../form-field/form-field';

@Component({
  selector: 'app-csselect',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormFieldComponent],
  templateUrl: './csselect.html',
  styleUrl: './csselect.css',
})
export class CSSelect {

  @Input() label!: string;
  @Input() control!: FormControl;

  // opciones dinámicas
  @Input() options: { label: string; value: any }[] = [];

  @Input() placeholder: string = 'Seleccionar...';

}