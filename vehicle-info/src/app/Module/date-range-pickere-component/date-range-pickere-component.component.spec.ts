import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangePickereComponentComponent } from './date-range-pickere-component.component';

describe('DateRangePickereComponentComponent', () => {
  let component: DateRangePickereComponentComponent;
  let fixture: ComponentFixture<DateRangePickereComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateRangePickereComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateRangePickereComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
