import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getLines(): Observable<any[]>{
    let lines:any[] = [
      {
        key: 1,
        name: "Hart1"
      },
      {
        key: 2,
        name: "Hart2"
      },
      {
        key: 3,
        name: "Hart3"
      }
    ]
    return Observable.create(observer => {
      observer.next(lines);
    })
  }

  getOperators(): Observable<any[]> {
    let operators: any[] = [
      {
        id: 1,
        idLine: 1,
        name: "Damian"
      },
      {
        id: 2,
        idLine: 1,
        name: "Emerson"
      },
      {
        id: 3,
        idLine: 1,
        name: "Jesus"
      },
      {
        id: 4,
        idLine: 2,
        name: "Cristian"
      },
      {
        id: 5,
        idLine: 3,
        name: "Julio"
      }
    ];
    return Observable.create(observer => {
      observer.next(operators);
    })
  }

  getStoppages(): Observable<any[]>{
    let stoppages: any[] = [
      {
        key:1,
        name: 'Cena de navidad'
      },
      {
        key:2,
        name: 'Rosca de Reyes'
      },
      {
        key:3,
        name: 'Dia libre'
      }
    ];

    return Observable.create( observer => {
      observer.next(stoppages);
    })
  }

}
