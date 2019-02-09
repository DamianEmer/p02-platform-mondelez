import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from "@ngrx/effects";

import { Observable, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";

import * as fromStoppages from '../actions/stoppage.actions';
import { Stoppage } from '../../models/stoppage';
import { DataService } from '../../services/data.service';

@Injectable()
export class StoppageEffects {
    constructor(private dataService: DataService,
        private actions$: Actions) {
        console.log('Stoppages Effects')
    }

    @Effect()
    lines$: Observable<Action> = this.actions$.pipe(
        ofType(fromStoppages.ActionStoppageTypes.LOAD_STOPPAGES),
        mergeMap(action =>
            this.dataService.getStoppages().pipe(
                map((data: Stoppage[]) => new fromStoppages.LoadStoppagesSuccess(data)),
                catchError(() => of(new fromStoppages.LoadError('Error en la carga de lineas')))
            )))
}