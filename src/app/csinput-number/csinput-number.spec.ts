import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSInputNumber } from './csinput-number';

describe('CSInputNumber', () => {
  let component: CSInputNumber;
  let fixture: ComponentFixture<CSInputNumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSInputNumber],
    }).compileComponents();

    fixture = TestBed.createComponent(CSInputNumber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
