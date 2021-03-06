import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProductTypeComponent } from './edit-product-type.component';

describe('EditProductTypeComponent', () => {
  let component: EditProductTypeComponent;
  let fixture: ComponentFixture<EditProductTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProductTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProductTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
