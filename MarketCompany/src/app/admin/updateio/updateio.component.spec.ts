import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateioComponent } from './updateio.component';

describe('UpdateioComponent', () => {
  let component: UpdateioComponent;
  let fixture: ComponentFixture<UpdateioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
