import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterbarsComponent } from './footerbars.component';

describe('FooterbarsComponent', () => {
  let component: FooterbarsComponent;
  let fixture: ComponentFixture<FooterbarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterbarsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterbarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
