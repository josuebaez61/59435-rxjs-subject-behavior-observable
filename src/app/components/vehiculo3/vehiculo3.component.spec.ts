import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Vehiculo3Component } from './vehiculo3.component';

describe('Vehiculo3Component', () => {
  let component: Vehiculo3Component;
  let fixture: ComponentFixture<Vehiculo3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Vehiculo3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Vehiculo3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
