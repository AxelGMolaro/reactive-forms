import { CommonModule } from '@angular/common';
import { Component, Input, TemplateRef, AfterViewChecked } from '@angular/core';
import * as Prism from 'prismjs';

// 🔥 MUY IMPORTANTE
(window as any).Prism = Prism;

// lenguajes (después de setear window.Prism)
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-markup';

@Component({
  selector: 'app-code-snipped',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './code-snipped.html',
  styleUrl: './code-snipped.css',
})
export class CodeSnipped implements AfterViewChecked {

  @Input() title = '';
  @Input() htmlCode = '';
  @Input() tsCode = '';
  @Input() preview!: TemplateRef<any>;

  activeTab = 1;

  ngAfterViewChecked() {
    Prism.highlightAll();
  }
}