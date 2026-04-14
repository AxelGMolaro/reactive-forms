import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSInputEmailDemo } from './csinput-email-demo';

describe('CSInputEmailDemo', () => {
  let component: CSInputEmailDemo;
  let fixture: ComponentFixture<CSInputEmailDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSInputEmailDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(CSInputEmailDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
