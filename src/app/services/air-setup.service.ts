import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Air } from '../models/air/air.model';

@Injectable({
  providedIn: 'root'
})
export class AirSetupService {

  air$ = new BehaviorSubject<Air>(Air.getInstance());

  constructor() { }

  getAir(): Observable<Air> {
    return this.air$;
  }

  setAir(air: Air) {
    this.air$.next(air);
  }
}
