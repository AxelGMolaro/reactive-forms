import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSelect } from './csselect';

describe('CSSelect', () => {
  let component: CSSelect;
  let fixture: ComponentFixture<CSSelect>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSSelect],
    }).compileComponents();

    fixture = TestBed.createComponent(CSSelect);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
