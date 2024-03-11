import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelsComponentComponent } from './wheels-component.component';

describe('WheelsComponentComponent', () => {
  let component: WheelsComponentComponent;
  let fixture: ComponentFixture<WheelsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WheelsComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
