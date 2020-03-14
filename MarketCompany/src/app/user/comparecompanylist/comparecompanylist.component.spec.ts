import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComparecompanylistComponent } from './comparecompanylist.component';

describe('ComparecompanylistComponent', () => {
  let component: ComparecompanylistComponent;
  let fixture: ComponentFixture<ComparecompanylistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComparecompanylistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComparecompanylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
