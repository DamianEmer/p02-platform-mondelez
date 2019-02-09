import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from "@ngrx/effects";

import { Observable, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";

import * as fromLines from '../actions/line.actions';
import { Line } from '../../models/line';
import { DataService } from '../../services/data.service';

@Injectable()
export class LineEffects {
    constructor(private dataService: DataService,
        private actions$: Actions) {
            console.log('Line Effects')
    }

    @Effect()
    lines$: Observable<Action> = this.actions$.pipe(
        ofType(fromLines.ActionLineTypes.LOAD_LINES),
        mergeMap(action =>
            this.dataService.getLines().pipe(
                map((data: Line[]) => new fromLines.LoadLineSuccess(data)),
                catchError(() => of(new fromLines.LoadError('Error en la carga de lineas')))
            ))
    )

    // @Effect()
    // linesById$: Observable<Action> = this.actions$.pipe(
    //     ofType(fromLines.ActionLineTypes.LOAD_ID_LINE),
    //     map((action: fromLines.AllLineActions) => action.payload),
    //     switchMap(id=>
    //         this.dataService.getLines().pipe(
    //             map((data: Line[]) => new fromLines.LoadLineSuccess(data)),
    //             catchError(()=> of(new fromLines.LoadError('Error e la carga de lineas')))
    //         ))
    // )


}