import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrenchPressComponent } from './FrenchPress.component';

describe('FrenchPressComponent', () => {
  let component: FrenchPressComponent;
  let fixture: ComponentFixture<FrenchPressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrenchPressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrenchPressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
