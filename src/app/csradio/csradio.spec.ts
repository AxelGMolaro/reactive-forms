import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSRadio } from './csradio';

describe('CSRadio', () => {
  let component: CSRadio;
  let fixture: ComponentFixture<CSRadio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSRadio],
    }).compileComponents();

    fixture = TestBed.createComponent(CSRadio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
