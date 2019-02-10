import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import * as fromOperators from '../actions/operator.actions';
import * as fromLines from '../actions/line.actions';

import { catchError, map, switchMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { Operator } from '../../models/operator';

@Injectable()
export class OperatorEffects {

    @Effect() turns$: Observable<Action> = this.actions$.pipe(
        ofType(fromLines.ActionLineTypes.LOAD_ID_LINE),
        map((action: fromLines.AllLineActions) => action.payload),
        switchMap(id => 
            this.dataService.getOperators(id).pipe(
                map((data: Operator[]) => new fromOperators.LoadOperatorsSuccess(data)),
                catchError(()=> of(new fromOperators.LoadError('Error al cargar los operadores')))
            )
        )
    )

    constructor(private actions$: Actions, 
        private dataService:DataService ) { }

}

