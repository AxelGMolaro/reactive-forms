import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl } from '@angular/forms';

import { FormFieldComponent } from '../form-field/form-field';

@Component({
  selector: 'app-cscheckbox',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormFieldComponent],
  templateUrl: './cscheckbox.html',
  styleUrl: './cscheckbox.css',
})
export class CSCheckbox {

  @Input() label!: string;
  @Input() control!: FormControl;

}