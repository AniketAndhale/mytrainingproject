import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateStockpriceComponent } from './update-stockprice.component';

describe('UpdateStockpriceComponent', () => {
  let component: UpdateStockpriceComponent;
  let fixture: ComponentFixture<UpdateStockpriceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateStockpriceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateStockpriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
