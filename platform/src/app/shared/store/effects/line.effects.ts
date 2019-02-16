import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from "@ngrx/effects";

import { Observable, of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";

import * as fromLines from '../actions/line.actions';
import { DataService } from '../../services/data.service';
import { Line2 } from "../../models/Line2";

@Injectable()
export class LineEffects {
    constructor(private dataService: DataService,
        private actions$: Actions) {  }

    @Effect()
    lines$: Observable<Action> = this.actions$.pipe(
        ofType(fromLines.ActionLineTypes.LOAD_LINES),
        mergeMap(action =>
            this.dataService.getLines2().pipe(
                map((data: Line2[]) => new fromLines.LoadLineSuccess(data)),
                catchError(() => of(new fromLines.LoadError('Error en la carga de lineas')))
            ))
    )

}