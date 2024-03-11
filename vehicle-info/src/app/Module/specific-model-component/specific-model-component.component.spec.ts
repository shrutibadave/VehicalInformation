import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecificModelComponentComponent } from './specific-model-component.component';

describe('SpecificModelComponentComponent', () => {
  let component: SpecificModelComponentComponent;
  let fixture: ComponentFixture<SpecificModelComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecificModelComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecificModelComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
