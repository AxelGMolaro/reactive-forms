import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSSelectDemo } from './csselect-demo';

describe('CSSelectDemo', () => {
  let component: CSSelectDemo;
  let fixture: ComponentFixture<CSSelectDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSSelectDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(CSSelectDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
