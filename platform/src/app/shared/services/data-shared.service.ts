import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataSharedService {

  private currentDate = new BehaviorSubject<any>([]);

  currentDate$ = this.currentDate.asObservable();

  constructor() { }

  public setCurrentDate(n: any) {
    this.currentDate.next(n);
  }
}
