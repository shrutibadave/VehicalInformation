import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfvehicleComponentComponent } from './type-of-vehicle-component.component';

describe('TypeOfWheelComponentComponent', () => {
  let component: TypeOfvehicleComponentComponent;
  let fixture: ComponentFixture<TypeOfvehicleComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TypeOfvehicleComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfvehicleComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
