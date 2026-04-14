import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSInputNumberDemo } from './csinput-number-demo';

describe('CSInputNumberDemo', () => {
  let component: CSInputNumberDemo;
  let fixture: ComponentFixture<CSInputNumberDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSInputNumberDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(CSInputNumberDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
