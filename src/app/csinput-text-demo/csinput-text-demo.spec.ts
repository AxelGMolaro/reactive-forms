import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSInputTextDemo } from './csinput-text-demo';

describe('CSInputTextDemo', () => {
  let component: CSInputTextDemo;
  let fixture: ComponentFixture<CSInputTextDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSInputTextDemo],
    }).compileComponents();

    fixture = TestBed.createComponent(CSInputTextDemo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
