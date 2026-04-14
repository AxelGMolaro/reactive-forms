import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSRadioDemo } from './csradio-demo';

describe('CSRadioDemo', () => {
  let component: CSRadioDemo;
  let fixture: ComponentFixture<CSRadioDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSRadioDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(CSRadioDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
