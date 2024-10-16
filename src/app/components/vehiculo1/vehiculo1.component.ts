import { Component, OnDestroy, OnInit } from '@angular/core';
import { SemaforoService } from '../../services/semaforo.service';
import {
  BehaviorSubject,
  interval,
  Subject,
  Subscription,
  take,
  takeUntil,
} from 'rxjs';

@Component({
  selector: 'app-vehiculo1',
  templateUrl: './vehiculo1.component.html',
  styleUrl: './vehiculo1.component.scss',
})
export class Vehiculo1Component implements OnInit, OnDestroy {
  /**
   *
   *
   */

  destroyed$ = new Subject();
  // destroyed$ = new BehaviorSubject(true);

  constructor(public semaforoService: SemaforoService) {}

  ngOnInit(): void {
    // interval(1000).pipe(takeUntil(this.destroyed$)).subscribe({
    //   next: console.log,
    // });
  }

  ngOnDestroy(): void {
    this.destroyed$.next(true);
  }
}
