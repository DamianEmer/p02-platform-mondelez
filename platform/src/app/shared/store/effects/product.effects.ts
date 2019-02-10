import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';

import * as fromLines from '../actions/line.actions';
import * as fromProducts from '../actions/product.actions';

import { catchError, map, switchMap } from 'rxjs/operators';
import { DataService } from '../../services/data.service';
import { Product} from '../../models/product';

@Injectable()
export class ProductEffects {

    @Effect() products$: Observable<Action> = this.actions$.pipe(
        ofType(fromLines.ActionLineTypes.LOAD_ID_LINE),
        map((action: fromLines.AllLineActions) => action.payload),
        switchMap(id =>
            this.dataService.getProducts(id).pipe(
                map((data: Product[]) => new fromProducts.LoadProductsSuccess(data)),
                catchError(() => of(new fromProducts.LoadError('Ocurrio un error en la carga de productos')))
            )
            )
    )

    constructor (private actions$: Actions,
        private dataService: DataService) { }
}