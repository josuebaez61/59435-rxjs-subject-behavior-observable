import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export type SemaforoColor = 'verde' | 'rojo';

@Injectable({
  providedIn: 'root',
})
export class SemaforoService {
  color: SemaforoColor = 'verde';

  color$ = new BehaviorSubject(this.color);

  constructor() {
    setInterval(() => {
      this.color = this.color === 'verde' ? 'rojo' : 'verde';
      this.color$.next(this.color);
    }, 1000);
  }
}
