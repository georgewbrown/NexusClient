import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusniessProfileComponent } from './busniess-profile.component';

describe('BusniessProfileComponent', () => {
  let component: BusniessProfileComponent;
  let fixture: ComponentFixture<BusniessProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusniessProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusniessProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
