import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSTextArea } from './cstext-area';

describe('CSTextArea', () => {
  let component: CSTextArea;
  let fixture: ComponentFixture<CSTextArea>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSTextArea],
    }).compileComponents();

    fixture = TestBed.createComponent(CSTextArea);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
