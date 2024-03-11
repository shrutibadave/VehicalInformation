import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypeOfWheelComponentComponent } from './type-of-wheel-component.component';

describe('TypeOfWheelComponentComponent', () => {
  let component: TypeOfWheelComponentComponent;
  let fixture: ComponentFixture<TypeOfWheelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypeOfWheelComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypeOfWheelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
