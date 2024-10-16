import { Component } from '@angular/core';
import {
  SemaforoColor,
  SemaforoService,
} from '../../services/semaforo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-vehiculo2',
  templateUrl: './vehiculo2.component.html',
  styleUrl: './vehiculo2.component.scss',
})
export class Vehiculo2Component {
  color$: Observable<SemaforoColor>;

  constructor(private semaforoService: SemaforoService) {
    this.color$ = this.semaforoService.color$;
  }
}
