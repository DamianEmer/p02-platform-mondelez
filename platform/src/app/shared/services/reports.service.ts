import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../models/report';

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
    ]

    constructor() { }

    getReports(infoSearch?: Date): Observable<Report[]> {
        return Observable.create(observer => {
            observer.next(this.reports);
        })
    }

}
