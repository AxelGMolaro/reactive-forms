import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSCheckbox } from './cscheckbox';

describe('CSCheckbox', () => {
  let component: CSCheckbox;
  let fixture: ComponentFixture<CSCheckbox>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSCheckbox],
    }).compileComponents();

    fixture = TestBed.createComponent(CSCheckbox);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
