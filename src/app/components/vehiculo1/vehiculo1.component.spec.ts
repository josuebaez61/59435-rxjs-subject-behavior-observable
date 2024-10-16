import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vehiculo1Component } from './vehiculo1.component';

describe('Vehiculo1Component', () => {
  let component: Vehiculo1Component;
  let fixture: ComponentFixture<Vehiculo1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vehiculo1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vehiculo1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
