import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSInputPasswordDemo } from './csinput-password-demo';

describe('CSInputPasswordDemo', () => {
  let component: CSInputPasswordDemo;
  let fixture: ComponentFixture<CSInputPasswordDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSInputPasswordDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(CSInputPasswordDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
