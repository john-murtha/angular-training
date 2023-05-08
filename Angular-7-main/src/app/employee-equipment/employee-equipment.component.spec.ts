import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeEquipmentComponent } from './employee-equipment.component';

describe('EmployeeEquipmentComponent', () => {
  let component: EmployeeEquipmentComponent;
  let fixture: ComponentFixture<EmployeeEquipmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeEquipmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeEquipmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
