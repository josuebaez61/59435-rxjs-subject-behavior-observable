import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  SemaforoColor,
  SemaforoService,
} from '../../services/semaforo.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-vehiculo3',
  templateUrl: './vehiculo3.component.html',
  styleUrl: './vehiculo3.component.scss',
})
export class Vehiculo3Component implements OnInit, OnDestroy {
  color?: SemaforoColor;
  destroyed$ = new Subject();

  constructor(private semaforoService: SemaforoService) {}

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }

  ngOnInit(): void {
    this.semaforoService.color$.pipe(takeUntil(this.destroyed$)).subscribe({
      next: (v) => {
        this.color = v;
      },
    });
  }
}
