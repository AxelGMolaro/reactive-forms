import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-code-snipped',
  standalone: true, // 🔥 obligatorio
  imports: [CommonModule],
  templateUrl: './code-snipped.html',
  styleUrl: './code-snipped.css',
})
export class CodeSnipped {

  @Input() title = '';
  @Input() htmlCode = '';
  @Input() tsCode = '';

  @Input() preview!: TemplateRef<any>; // 🔥 clave

  activeTab = 1;
}