import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartonComponent } from './carton.component';

describe('CartonComponent', () => {
  let component: CartonComponent;
  let fixture: ComponentFixture<CartonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CartonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
