import { Component, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-field',
  standalone: true,
  templateUrl: './form-field.html'
})
export class FormFieldComponent {
  @Input() label!: string;
  @Input() control!: AbstractControl | null;
}