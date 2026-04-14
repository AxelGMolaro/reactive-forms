import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSInputEmail } from './csinput-email';

describe('CSInputEmail', () => {
  let component: CSInputEmail;
  let fixture: ComponentFixture<CSInputEmail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSInputEmail],
    }).compileComponents();

    fixture = TestBed.createComponent(CSInputEmail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
