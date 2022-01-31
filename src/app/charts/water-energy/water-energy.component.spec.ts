import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterEnergyComponent } from './water-energy.component';

describe('WaterEnergyComponent', () => {
  let component: WaterEnergyComponent;
  let fixture: ComponentFixture<WaterEnergyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WaterEnergyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WaterEnergyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
