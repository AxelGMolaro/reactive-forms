import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CodeSnipped } from './code-snipped';

describe('CodeSnipped', () => {
  let component: CodeSnipped;
  let fixture: ComponentFixture<CodeSnipped>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CodeSnipped],
    }).compileComponents();

    fixture = TestBed.createComponent(CodeSnipped);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
