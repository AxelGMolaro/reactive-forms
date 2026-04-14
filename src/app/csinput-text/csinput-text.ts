import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';
import { CodeSnipped } from '../code-snipped/code-snipped';

@Component({
  selector: 'app-csinput-text',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CodeSnipped
  ],
  templateUrl: './csinput-text.html',
})
export class CSInputText {

  // 🔥 Reactive Form real
  form = new FormGroup({
    name: new FormControl('')
  });

  // 📄 HTML como string
  htmlExample = `
<form [formGroup]="form">
  <input formControlName="name" class="border p-2" placeholder="Your name" />
</form>

<p>{{ form.value | json }}</p>
`;

  // 📄 TS como string
  tsExample = `
form = new FormGroup({
  name: new FormControl('')
});
`;

}