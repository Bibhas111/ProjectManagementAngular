import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftnavigationComponent } from './leftnavigation.component';

describe('LeftnavigationComponent', () => {
  let component: LeftnavigationComponent;
  let fixture: ComponentFixture<LeftnavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeftnavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeftnavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
