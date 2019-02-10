import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';

import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

import * as fromTurns from '../actions/turn.actions';
import * as fromLines from '../actions/line.actions';
import { Turn } from '../../models/turn';
import { DataService } from '../../services/data.service';

@Injectable()
export class TurnEffects {
    constructor ( private dataService: DataService,
        private actions$: Actions){ }

    @Effect()
    turns$: Observable<Action> = this.actions$.pipe(
        ofType(fromLines.ActionLineTypes.LOAD_LINES),
        mergeMap(action => 
            this.dataService.getTurns().pipe(
                map((data: Turn[]) => new fromTurns.LoadTurnSuccess(data)),
                catchError(()=> of(new fromTurns.LoadError('Error en la carga de turnos')))
            ))
    )
}