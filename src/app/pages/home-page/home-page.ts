import { Component } from '@angular/core';
import { CodeSnipped } from '../../code-snipped/code-snipped';
import { CSInputText } from '../../csinput-text/csinput-text';
import { CommonModule } from '@angular/common';
import { CSInputTextDemo } from '../../csinput-text-demo/csinput-text-demo';
import { CSInputEmailDemo } from '../../csinput-email-demo/csinput-email-demo';
import { CSInputPasswordDemo } from '../../csinput-password-demo/csinput-password-demo';
import { CSCheckboxDemo } from '../../cscheckbox-demo/cscheckbox-demo';
import { CSInputNumberDemo } from '../../csinput-number-demo/csinput-number-demo';

@Component({
  selector: 'app-home-page',
  imports: [ CSInputTextDemo,CSInputEmailDemo,
    CSInputPasswordDemo,
    CSCheckboxDemo,
    CSInputNumberDemo,
    CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  standalone: true
})
export class HomePage {}
