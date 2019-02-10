import { Injectable } from "@angular/core";
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from "@ngrx/effects";

import { Observable, of } from "rxjs";
import { catchError, map, mergeMap, switchMap } from "rxjs/operators";

import * as fromUnplannedStop from '../actions/unplannedStoppage.actions';
import * as fromLines from '../actions/line.actions';

import { UnplannedStoppage } from '../../models/unplannedStoppage';
import { DataService } from '../../services/data.service';

@Injectable()
export class UnplannedStoppageEffects {
    constructor(private dataService: DataService,
        private actions$: Actions) {  }

    @Effect()
    lines$: Observable<Action> = this.actions$.pipe(
        ofType(fromLines.ActionLineTypes.LOAD_ID_LINE),
        map((action: fromLines.AllLineActions) => action.payload),
        switchMap(id =>
            this.dataService.getUnplannedStoppages(id).pipe(
                map((data: UnplannedStoppage[]) => new fromUnplannedStop.LoadUnplannedStopSuccess(data)),
                catchError(() => of( new fromUnplannedStop.LoadError('Error al cargar paros no planeados')))
            )    
        )
    )
        
}