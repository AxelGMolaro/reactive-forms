import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSInputPassword } from './csinput-password';

describe('CSInputPassword', () => {
  let component: CSInputPassword;
  let fixture: ComponentFixture<CSInputPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSInputPassword],
    }).compileComponents();

    fixture = TestBed.createComponent(CSInputPassword);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
