import { Injectable } from '@angular/core';
import { Observable, of, observable } from 'rxjs';
import { Line2 } from '../models/Line2';
import { Operator } from '../models/operator';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  //GET
  getTurns(): Observable<any[]> {
    // localhost:8080/turns
    let turns: any[] = [
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

 
  //GET
  getStoppages(): Observable<any[]> {
    // localhost:8080/stoppages
    let stoppages: any[] = [
      {
        id: 1,
        type: 'z',
        description: 'Dias Festivos'
      },
      {
        id: 2,
        type: 'z',
        description: 'Dias acordados por el sindicato'
      },
      {
        id: 3,
        type: 'p',
        description: 'Programa cumplido - no demanda'
      }
    ];

    return Observable.create(observer => {
      observer.next(stoppages);
    })
  }

  //GET
  getUnplannedStoppages(idLine?: string): Observable<any[]> {
    // localhost:8080/unplanned_stoppages?lineId=${isLine}
    let stoppages: any[] = [
      {
        id: 1,
        name: 'Option 1'
      },
      {
        id: 2,
        name: 'Option 2'
      },
      {
        id: 3,
        name: 'Option 3'
      }
    ];

    return Observable.create(observer => {
      observer.next(stoppages);
    })
  }

  //GET
  getProducts(idLine?: string): Observable<any[]>{
    // localhost:8080/products?lineId=${isLine}
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

    let productsFilter = products.filter(product => product.idLine === idLine);
    return Observable.create( observer => {
      observer.next(productsFilter);
    })
  }

  //POST
  saveRegistry(registry: any) {
    // localhost:8080/sku
    console.log("Registro save ", registry);
  }

  /**
   * NUEVOS SERVICIOS FUNCIONALES PARA AMBAS SECCIONES
   */

  lines: Line2[] = [
    {
      id: 1,
      line: 'Linea 1',
      category: 'cat1',
      technology: 'tech1',
      number: '01 Linea 1',
      products: [
        {
          id: 1,
          description: 'PHILLY BRCK ORIGCONS 21X4X190G', 
          kgmin: 1254,
          kgcj: 15.96
        }
      ],
      breakdowns: [
        {
          id: 1,
          description: 'Sin energia eletrica'
        },
        {
          id: 2,
          description: 'Sin agua'
        }
      ]
    },
    {
      id: 2,
      line: 'Linea 2',
      category: 'cat2',
      technology: 'tech2',
      number: '02 Linea 2',
      products: [
        {
          id: 1,
          description: 'PHILLY BRCK 24x140G',
          kgmin: 840,
          kgcj: 3.36,
        },
        {
          id: 75010020004500,
          description: 'PHILLY BRCK ORIG CONS 24X190G',
          kgmin: 1254,
          kgcj: 4.56,
        }
      ],
      breakdowns: [
        {
          id: 1,
          description: 'Sin energia eletrica'
        },
        {
          id: 2,
          description: 'Sin agua'
        }
      ]
    },
    {
      id: 3,
      line: 'Linea 3',
      category: 'cat3',
      technology: 'tech3',
      number: '03 Linea 3',
      products: [
        {
          id: 1,
          description: 'PHILLY BRCK 24x140G',
          kgmin: 840,
          kgcj: 3.36,
        },
        {
          id: 75010020004500,
          description: 'PHILLY BRCK ORIG CONS 24X190G',
          kgmin: 1254,
          kgcj: 4.56,
        },
        {
          id: 75010020088500,
          description: 'PHILLY BRCK ORIG CONS 24X190G',
          kgmin: 1254,
          kgcj: 4.56,
        }
      ],
      breakdowns: [
        {
          id: 1,
          description: 'Sin energia eletrica'
        },
        {
          id: 2,
          description: 'Sin agua'
        }
      ]
    }
  ]

  getLines2(): Observable<Line2[]> {
    return Observable.create(observer => {
      observer.next(this.lines);
    })
  }

  getLineById(id: number): Line2 {
    return this.lines.find(line => line.id === id);
  }

  operators: Operator[] = [
    {
      id: 1,
      name: "Damian",
      idLine: 1,
      line: 'Linea 1'
    },
    {
      id: 2,
      name: "Emerson",
      idLine: 1,
      line: 'Linea 1'
    },
    {
      id: 3,
      name: "Jesus",
      idLine: 1,
      line: 'Line 1'
    },
    {
      id: 4,
      name: "Cristian",
      idLine: 2,
      line:'Linea 2'
    },
    {
      id: 5,
      name: "Julio",
      idLine: 3,
      line: 'Line 3'
    }
  ]

  getOperators2(): Observable<Operator[]> {
    return Observable.create(observer => {
      observer.next(this.operators)
    })
  }

  getOperatorsById(id: string): Observable<Operator[]>{
    let operators = this.operators.filter(ope => ope.idLine === parseInt(id));
    return Observable.create(observer => {
      observer.next(operators)
    })
  }

  // Registros 
  records: any[] = [
    {
      idLine: 2,
      line: 'Linea 2',
      nameOperator: 'Cristian',
      turn: 1,
      date: 'Wed Feb 20 2019 00:00:00 GMT-0600 (hora estándar central)',
      stoppages:[
        {
          id: 1,
          minutes: 10,
          times: 1
        },
        {
          id: 2,
          minutes: 30,
          times: 1
        }
      ],
      sku: [
        {
          idDescription: 1,
          description: 'Philadelphia',
          productionTime: 470,
          volume: 600,
          reprocess: '',
          retentions: '',
          waste: '',
          kgmin: 20.90,
          kgcj: 15.96,
          tld: 458.18,
          idealVolume: 615.48,
          lossSpeed: 1.82,
          ge: 95.45,
          oee: 97.49,
          stoppages: [
            { 
              id: 1,
              minutes: 10,
              times: 1 
            }
          ]
        }
      ]
    }
  ]

  getRecords(week: number, day: number):Observable<any[]>{
    return Observable.create(observer => {
      observer.next(this.records);
    })
  }

}
