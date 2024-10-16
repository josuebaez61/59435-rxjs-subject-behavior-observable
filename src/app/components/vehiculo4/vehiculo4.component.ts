import { Component } from '@angular/core';
import {
  SemaforoColor,
  SemaforoService,
} from '../../services/semaforo.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-vehiculo4',
  templateUrl: './vehiculo4.component.html',
  styleUrl: './vehiculo4.component.scss',
})
export class Vehiculo4Component {
  color$: Observable<SemaforoColor>;

  constructor(public semaforoService: SemaforoService) {
    this.color$ = semaforoService.color$.pipe(
      map((colorOriginal) => (colorOriginal === 'verde' ? 'rojo' : 'verde'))
    );
  }
}
