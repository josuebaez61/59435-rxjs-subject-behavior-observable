import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vehiculo2Component } from './vehiculo2.component';

describe('Vehiculo2Component', () => {
  let component: Vehiculo2Component;
  let fixture: ComponentFixture<Vehiculo2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vehiculo2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vehiculo2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
