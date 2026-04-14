import { Component } from '@angular/core';
import { CodeSnipped } from '../../code-snipped/code-snipped';
import { CSInputText } from '../../csinput-text/csinput-text';
import { CommonModule } from '@angular/common';
import { CSInputTextDemo } from '../../csinput-text-demo/csinput-text-demo';

@Component({
  selector: 'app-home-page',
  imports: [ CSInputTextDemo,CommonModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css',
  standalone: true
})
export class HomePage {}
