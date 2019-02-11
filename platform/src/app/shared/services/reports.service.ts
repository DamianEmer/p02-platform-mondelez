import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InfoDay } from '../models/infoDay';
import { InfoWeek } from '../models/infoWeek';
import { InfoMonth } from '../models/infoMonth';
import { HttpParams } from '@angular/common/http';

interface Data {
    week: number,
    day: number;
}

@Injectable({
    providedIn: 'root'
})
export class ReportsService {

    info_day: InfoDay[] = [
        {
            id: 1,
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
            id: 2,
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
            id: 3,
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

    info_week: InfoWeek[] = [
        {
            id: 1,
            line: 'Hart 1',
            dates: [
                { id: 1, value: 0 },
                { id: 2, value: 99 },
                { id: 3, value: 95 },
                { id: 4, value: 85 },
                { id: 5, value: 85 },
                { id: 6, value: 96 },
                { id: 7, value: 90 },
            ],
            volplan: 1000,
            volreal: 2000,
            kgvar: 3000
        },
        {
            id: 2,
            line: 'Hart 2',
            dates: [
                { id: 1, value: 100 },
                { id: 2, value: 98 },
                { id: 3, value: 98 },
                { id: 4, value: 98 },
                { id: 5, value: 95 },
                { id: 6, value: 99 },
                { id: 7, value: null },
            ],
            volplan: 2000,
            volreal: 4000,
            kgvar: 6000
        },
        {
            id: 3,
            line: 'Hart 3',
            dates: [
                { id: 1, value: 100 },
                { id: 2, value: 92 },
                { id: 3, value: 99 },
                { id: 4, value: 95 },
                { id: 5, value: 95 },
                { id: 6, value: 85 },
                { id: 7, value: 90 },
            ],
            volplan: 4000,
            volreal: 8000,
            kgvar: 9000
        },
        {
            id: 4,
            line: 'Nueva linea',
            dates: [
                { id: 1, value: 0 },
                { id: 2, value: 0 },
                { id: 3, value: 0 },
                { id: 4, value: 0 },
                { id: 5, value: 0 },
                { id: 6, value: 0 },
                { id: 7, value: 0 },
            ],
            volplan: 4000,
            volreal: 8000,
            kgvar: 9000
        }
    ]

    info_month: InfoMonth[] = [
        {
            id: 1,
            line: 'Hart 1',
            dates: [
                { id: 1, value: 99 },
                { id: 2, value: 98 },
                { id: 3, value: 96 },
                { id: 4, value: 85 },
                { id: 5, value: 99 },
            ],
            volplan: 846,
            volreal: 295,
            kgvar: 1547
        },
        {
            id: 2,
            line: 'Hart 2',
            dates: [
                { id: 1, value: 90 },
                { id: 2, value: 98 },
                { id: 3, value: 99 },
                { id: 4, value: 70 },
                { id: 5, value: 85 },
            ],
            volplan: 666,
            volreal: 2965,
            kgvar: 1589
        },
        {
            id: 3,
            line: 'Hart 3',
            dates: [
                { id: 1, value: 90 },
                { id: 2, value: 85 },
                { id: 3, value: 85 },
                { id: 4, value: 80 },
                { id: 5, value: 85 },
            ],
            volplan: 777,
            volreal: 895,
            kgvar: 135
        }
    ]

    constructor() { }

    getData(info?: Data): Observable<InfoDay[]> {
        let params = new HttpParams()
            .set('week', info.week.toString())
            .set('day', info.day.toString());
        return Observable.create(observer => {
            observer.next(this.info_day);
        });
    }

    getInfoWeek(info?: Data): Observable<InfoWeek[]> {
        let params = new HttpParams()
        .set('week', info.week.toString())
        .set('day', info.day.toString());
        return Observable.create(observer => {
            observer.next(this.info_week);
        });
    }

    getInfoWeeks(info?: Data): Observable<InfoMonth[]> {
        let params = new HttpParams()
        .set('week', info.week.toString())
        .set('day', info.day.toString());
        return Observable.create(observer => {
            observer.next(this.info_month);
        })
    }
}
