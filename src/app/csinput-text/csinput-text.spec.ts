import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CSInputText } from './csinput-text';

describe('CSInputText', () => {
  let component: CSInputText;
  let fixture: ComponentFixture<CSInputText>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CSInputText],
    }).compileComponents();

    fixture = TestBed.createComponent(CSInputText);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
