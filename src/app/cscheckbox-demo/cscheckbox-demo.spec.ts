import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSCheckboxDemo } from './cscheckbox-demo';

describe('CSCheckboxDemo', () => {
  let component: CSCheckboxDemo;
  let fixture: ComponentFixture<CSCheckboxDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSCheckboxDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(CSCheckboxDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
