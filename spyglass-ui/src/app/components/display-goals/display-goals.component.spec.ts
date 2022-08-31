import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayGoalsComponent } from './display-goals.component';

describe('DisplayGoalsComponent', () => {
  let component: DisplayGoalsComponent;
  let fixture: ComponentFixture<DisplayGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayGoalsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
