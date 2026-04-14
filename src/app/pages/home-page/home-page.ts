import { Component } from '@angular/core';
import { CodeSnipped } from '../../code-snipped/code-snipped';
import { CSInputText } from '../../csinput-text/csinput-text';
import { CommonModule } from '@angular/common';
import { CSInputTextDemo } from '../../csinput-text-demo/csinput-text-demo';
import { CSInputEmailDemo } from '../../csinput-email-demo/csinput-email-demo';
import { CSInputPasswordDemo } from '../../csinput-password-demo/csinput-password-demo';
import { CSCheckboxDemo } from '../../cscheckbox-demo/cscheckbox-demo';
import { CSInputNumberDemo } from '../../csinput-number-demo/csinput-number-demo';
import { CSRadioDemo } from '../../csradio-demo/csradio-demo';
import { CSSelectDemo } from '../../csselect-demo/csselect-demo';
import { CSTextAreaDemo } from '../../cstext-area-demo/cstext-area-demo';

@Component({
  selector: 'app-home-page',
  imports: [ CSInputTextDemo,CSInputEmailDemo,
    CSInputPasswordDemo,
    CSCheckboxDemo,
    CSInputNumberDemo,
    CSRadioDemo,
    CSSelectDemo,
    CSTextAreaDemo,
    CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  standalone: true
})
export class HomePage {}
