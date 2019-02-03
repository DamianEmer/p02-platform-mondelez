import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReportsService {

  data = [
    {
        line: 'Hart 1',
        geTurno: [
            {
                turno: 1,
                value: null,
            },
            {
                turno: 2,
                value: 92,
            },
            {
                turno: 3,
                value: 98,
            }
        ],
        oeeTurno: [
            {
                turno: 1,
                value: 98,
            },
            {
                turno: 2,
                value: 96,
            },
            {
                turno: 3,
                value: 70,
            }
        ],
        volplan: 1,
        volreal: 5000,
        kgvar: 3000  
    },
    {
        line: 'Hart 2',
        geTurno: [
            {
                turno: 1,
                value: 0,
            },
            {
                turno: 2,
                value: 95,
            },
            {
                turno: 3,
                value: 95,
            }
        ],
        oeeTurno: [
            {
                turno: 1,
                value: 99,
            },
            {
                turno: 2,
                value: 89,
            },
            {
                turno: 3,
                value: 100,
            }
        ],
        volplan: 1,
        volreal: 5000,
        kgvar: 3000  
    },
    {
        line: 'Hart 3',
        geTurno: [
            {
                turno: 1,
                value: null,
            },
            {
                turno: 2,
                value: null,
            },
            {
                turno: 3,
                value: null,
            }
        ],
        oeeTurno: [
            {
                turno: 1,
                value: 0,
            },
            {
                turno: 2,
                value: 99,
            },
            {
                turno: 3,
                value: 0,
            }
        ],
        volplan: 1,
        volreal: 5000,
        kgvar: 3000  
    }
]

info_week = [
    {
        line: 'Hart 1',
        monday: 10,
        tuesday: 20,
        wednesday: 30,
        thursday: 40,
        friday: 50,
        saturday: 60,
        sunday: 70,
        volplan: 1000,
        volreal: 2000,
        kgvar: 3000
    }
]

  constructor() { }

  getData(){
    return this.data;
  }

  getInfoWeek(){
      return this.info_week;
  }
}
