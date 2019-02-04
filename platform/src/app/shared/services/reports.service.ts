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
        dates: [
            {id: 1, value: 0},
            {id: 2, value: 99},
            {id: 3, value: 95},
            {id: 4, value: 85},
            {id: 5, value: 85},
            {id: 6, value: 96},
            {id: 7, value: 90},
        ],
        volplan: 1000,
        volreal: 2000,
        kgvar: 3000
    },
    {
        line: 'Hart 2',
        dates: [
            {id: 1, value: 100},
            {id: 2, value: 98},
            {id: 3, value: 98},
            {id: 4, value: 98},
            {id: 5, value: 95},
            {id: 6, value: 99},
            {id: 7, value: null},
        ],
        volplan: 2000,
        volreal: 4000,
        kgvar: 6000
    },
    {
        line: 'Hart 3',
        dates: [
            {id: 1, value: 100},
            {id: 2, value: 92},
            {id: 3, value: 99},
            {id: 4, value: 95},
            {id: 5, value: 95},
            {id: 6, value: 85},
            {id: 7, value: 90},
        ],
        volplan: 4000,
        volreal: 8000,
        kgvar: 9000
    },
    {
        line: 'Nueva linea',
        dates: [
            {id: 1, value: 0},
            {id: 2, value: 0},
            {id: 3, value: 0},
            {id: 4, value: 0},
            {id: 5, value: 0},
            {id: 6, value: 0},
            {id: 7, value: 0},
        ],
        volplan: 4000,
        volreal: 8000,
        kgvar: 9000
    }    
]

info_weeks = [
    {
        line: 'Hart 1',
        dates: [
            {id: 1, value: 99},
            {id: 2, value: 98},
            {id: 3, value: 96},
            {id: 4, value: 85},
            {id: 5, value: 99},
        ],
        volplan: 5555,
        volreal: 29565,
        kgvar: 15489
    },
    {
        line: 'Hart 2',
        dates: [
            {id: 1, value: 90},
            {id: 2, value: 98},
            {id: 3, value: 99},
            {id: 4, value: 70},
            {id: 5, value: 85},
        ],
        volplan: 6666,
        volreal: 29615,
        kgvar: 15899
    },
    {
        line: 'Hart 3',
        dates: [
            {id: 1, value: 90},
            {id: 2, value: 85},
            {id: 3, value: 85},
            {id: 4, value: 80},
            {id: 5, value: 85},
        ],
        volplan: 7777,
        volreal: 8975,
        kgvar: 13215
    }
]

  constructor() { }

  getData(){
    return this.data;
  }

  getInfoWeek(){
      return this.info_week;
  }

  getInfoWeeks(){
    return this.info_weeks;
}
}
