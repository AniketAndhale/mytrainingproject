import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagestockexchangeComponent } from './managestockexchange.component';

describe('ManagestockexchangeComponent', () => {
  let component: ManagestockexchangeComponent;
  let fixture: ComponentFixture<ManagestockexchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagestockexchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagestockexchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
