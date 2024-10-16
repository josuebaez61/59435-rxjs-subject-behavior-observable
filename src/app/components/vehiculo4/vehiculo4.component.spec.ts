import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vehiculo4Component } from './vehiculo4.component';

describe('Vehiculo4Component', () => {
  let component: Vehiculo4Component;
  let fixture: ComponentFixture<Vehiculo4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vehiculo4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vehiculo4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
