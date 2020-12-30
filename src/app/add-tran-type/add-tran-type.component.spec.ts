import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTranTypeComponent } from './add-tran-type.component';

describe('AddTranTypeComponent', () => {
  let component: AddTranTypeComponent;
  let fixture: ComponentFixture<AddTranTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTranTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTranTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
