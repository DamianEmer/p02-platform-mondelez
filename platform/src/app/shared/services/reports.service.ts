import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../models/report';
import { DetailLine } from '../models/detailLine';
import { UnplannedStoppageEffects } from '../store/effects/unplannedStoppages.effects';
import { HttpClient, HttpParams } from '@angular/common/http';

interface Date {
    week: number,
    day: number;
}

@Injectable({
    providedIn: 'root'
})
export class ReportsService {

    reports: Report[] = [
        {
            id: 1,
            line: 'Hart 1',
            geTurno: [
                {
                    id: 1,
                    turn: 450,
                    value: null
                },
                {
                    id: 2,
                    value: 92,
                },
                {
                    id: 3,
                    value: 98,
                }
            ],
            oeeTurno: [
                {
                    id: 1,
                    turn: 450,
                    value: 98
                },
                {
                    id: 2,
                    value: 96,
                },
                {
                    id: 3,
                    value: 70,
                }
            ],
            infoWeek: [
                { id: 1, valueGE: 0 },
                { id: 2, valueGE: 99 },
                { id: 3, valueGE: 95 },
                { id: 4, valueGE: 85 },
                { id: 5, valueGE: 85 },
                { id: 6, valueGE: 96 },
                { id: 7, valueGE: 90 },
            ],
            infoMonth: [
                { week: 1, valueGE: 99 },
                { week: 2, valueGE: 98 },
                { week: 3, valueGE: 98 },
                { week: 4, valueGE: 98 },
                { week: 5, valueGE: 98 },
                { week: 6, valueGE: 98 },
                { week: 7, valueGE: null },
            ],
            volplan: 4000,
            volreal: 598,
            kgvar: 1587
        },
        {
            id: 2,
            line: 'Hart 2',
            geTurno: [
                {
                    id: 1,
                    turn: 450,
                    value: null
                },
                {
                    id: 2,
                    value: 92,
                },
                {
                    id: 3,
                    value: 98,
                }
            ],
            oeeTurno: [
                {
                    id: 1,
                    turn: 450,
                    value: 98
                },
                {
                    id: 2,
                    value: 96,
                },
                {
                    id: 3,
                    value: 70,
                }
            ],
            infoWeek: [
                { id: 1, valueGE: 0 },
                { id: 2, valueGE: 98 },
                { id: 3, valueGE: 98 },
                { id: 4, valueGE: 88 },
                { id: 5, valueGE: 88 },
                { id: 6, valueGE: 98 },
                { id: 7, valueGE: 98 },
            ],
            infoMonth: [
                { week: 1, valueGE: 99 },
                { week: 2, valueGE: 98 },
                { week: 3, valueGE: 98 },
                { week: 4, valueGE: 98 },
                { week: 5, valueGE: 98 },
                { week: 6, valueGE: 98 },
                { week: 7, valueGE: null },
            ],
            volplan: 4000,
            volreal: 598,
            kgvar: 1587
        },
        {
            id: 3,
            line: 'Hart 3',
            geTurno: [
                {
                    id: 1,
                    turn: 450,
                    value: null
                },
                {
                    id: 2,
                    value: 92,
                },
                {
                    id: 3,
                    value: 98,
                }
            ],
            oeeTurno: [
                {
                    id: 1,
                    turn: 450,
                    value: 98
                },
                {
                    id: 2,
                    value: 96,
                },
                {
                    id: 3,
                    value: 70,
                }
            ],
            infoWeek: [
                { id: 1, valueGE: 0 },
                { id: 2, valueGE: 99 },
                { id: 3, valueGE: 95 },
                { id: 4, valueGE: 85 },
                { id: 5, valueGE: 85 },
                { id: 6, valueGE: 96 },
                { id: 7, valueGE: 90 },
            ],
            infoMonth: [
                { week: 1, valueGE: 99 },
                { week: 2, valueGE: 98 },
                { week: 3, valueGE: 98 },
                { week: 4, valueGE: 98 },
                { week: 5, valueGE: 98 },
                { week: 6, valueGE: 98 },
                { week: 7, valueGE: null },
            ],
            volplan: 4000,
            volreal: 598,
            kgvar: 1587
        }
    ];

    detailLine: DetailLine = {
        id: 1,
        nummberWeek: 50,
        date: '2018/12/12',
        line: 'Hart 1',
        operator: 'Blas Torres Bertha',
        turn: 1,
        turnTime: 480,
        idSku: '75010020004100',
        descriptionSku: 'PHILLY BRCK ORIGCONS 21X4X190G',
        oee: 0,
        ge: 0,
        timeProduction: 480,
        volume: 620,
        tld: 473,
        waste: null,
        typeWaste: null,
        retentions: null,
        typeRetention: null,
        reprocess: null,
        typeReprocess: null,
        lostSpeed: 0.545454545,
        unplannedStoppages: [
            {
                id:'H0102',
                description: 'Paro menor Cerradora/Encintadora',
                minutes: 3,
                times: 2,
                typeWF: 'Minor Stoppage'
            }
        ],
        plannedStoppages: []
    }

    apiURL = 'host:port/v1';
    
    constructor(private http: HttpClient) { }

    getReports(infoDate?: Date): Observable<Report[]> {
        // const httpParams = new HttpParams()
        //     .set('week', infoDate.week.toString())
        //     .set('day', infoDate.day.toString());
        return Observable.create(observer => {
            observer.next(this.reports);
        })

        // return this.http.get<Report[]>(`${this.apiURL}/reports`, { params: httpParams});
    }

    getLineById(id: number, infoDate?: Date): Observable<any>{
        console.log('FECHA SERVICIO:::: ',infoDate);
        // const httpParams = new HttpParams()
        // .set('week', infoDate.week.toString())
        // .set('day', infoDate.day.toString())
        return Observable.create(observer => {
            observer.next(this.detailLine);
        })
        // return this.http.get<Report[]>(`${this.apiURL}/reports/id`, { params: httpParams});
    }

}
