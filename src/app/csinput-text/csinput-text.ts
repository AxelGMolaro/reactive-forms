import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormFieldComponent } from '../form-field/form-field';

@Component({
  selector: 'app-csinput-text',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormFieldComponent],

  templateUrl: './csinput-text.html',
})
export class CSInputText {

  @Input() label!: string;
  @Input() control!: FormControl;
  @Input() placeholder: string = '';


}