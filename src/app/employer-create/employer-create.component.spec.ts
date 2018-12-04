import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployerCreateComponent } from './employer-create.component';

describe('EmployerCreateComponent', () => {
  let component: EmployerCreateComponent;
  let fixture: ComponentFixture<EmployerCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployerCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployerCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
