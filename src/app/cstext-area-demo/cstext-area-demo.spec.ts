import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSTextAreaDemo } from './cstext-area-demo';

describe('CSTextAreaDemo', () => {
  let component: CSTextAreaDemo;
  let fixture: ComponentFixture<CSTextAreaDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSTextAreaDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(CSTextAreaDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
