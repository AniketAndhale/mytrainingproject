import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Chart12Component } from './chart12.component';

describe('Chart12Component', () => {
  let component: Chart12Component;
  let fixture: ComponentFixture<Chart12Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Chart12Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Chart12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
