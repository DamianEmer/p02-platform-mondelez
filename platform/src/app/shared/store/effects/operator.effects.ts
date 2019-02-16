import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import * as fromOperators from '../actions/operator.actions';
import * as fromLines from '../actions/line.actions';

import { catchError, map, switchMap, mergeMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { Operator } from '../../models/operator';

@Injectable()
export class OperatorEffects {

    @Effect() operatorsById$: Observable<Action> = this.actions$.pipe(
        ofType(fromLines.ActionLineTypes.LOAD_ID_LINE),
        map((action: fromLines.AllLineActions) => action.payload),
        switchMap(id => 
            this.dataService.getOperatorsById(id).pipe(
                map((data: Operator[]) => new fromOperators.LoadOperatorsSuccess(data)),
                catchError(()=> of(new fromOperators.LoadError('Error al cargar los operadores')))
            )
        )
    )

    @Effect() operators$: Observable<Action> = this.actions$.pipe(
        ofType(fromOperators.ActionOperatorTypes.LOAD_OPERATORS),
        mergeMap(action => 
            this.dataService.getOperators2().pipe(
                map((data: Operator[]) => new fromOperators.LoadOperatorsSuccess(data)),
                catchError(() => of(new fromOperators.LoadError('Ocurrio un error en la carga de operadores')))
            ))
    )

    constructor(private actions$: Actions, 
        private dataService:DataService ) { }

}

