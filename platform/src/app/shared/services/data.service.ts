import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getTurns(): Observable<any[]>{
    let turns:any[] = [
      {
        id: 1,
        time: 480
      },
      {
        id: 2,
        time: 450
      },
      {
        id: 3,
        time: 510
      }
    ]
    return Observable.create(observer => {
      observer.next(turns);
    })
  }

  getLines(): Observable<any[]>{
    let lines:any[] = [
      {
        id: 1,
        name: "Hart1"
      },
      {
        id: 2,
        name: "Hart2"
      },
      {
        id: 3,
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
        id:1,
        name: 'Dias Festivos'
      },
      {
        id:2,
        name: 'Dias acordados por el sindicato'
      },
      {
        id:3,
        name: 'Programa cumplido - no demanda'
      }
    ];

    return Observable.create( observer => {
      observer.next(stoppages);
    })
  }

  getProducts(): Observable<any[]>{
    let products: any[] = [
      {
        id: '750100200004100',
        product: 'PHILLY BRCK ORIGCONS 21X4X190G', 
        kgMin: 1254,
        kgCj: 15.96,
        idLine: 1
      },
      {
        id: "76222102659500",
        product: 'PHILLY BRCK 24x140G',
        kgMin: 840,
        kgCj: 3.36,
        idLine: 2
      },
      {
        id: "75010020004500",
        product: 'PHILLY BRCK ORIG CONS 24X190G',
        kgMin: 1254,
        kgCj: 4.56,
        idLine: 2
      },
      {
        id: "76222107877600",
        product: 'PHILLY BRCK LACTOSE',
        kgMin: 1440,
        kgCj: 4.56,
        idLine: 3
      }
    ];
    return Observable.create( observer => {
      observer.next(products);
    })
  }

}
