import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/auth.service';
import { ErrorDialogService } from '../services/error-dialog.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private authService: AuthService,
        private errorDialog: ErrorDialogService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(
            catchError((err: HttpErrorResponse) => {
                let data = {};
                // if (err.status === 401) {
                //     this.authService.logout();
                //     location.reload(true);
                // }
                if (err.error instanceof ErrorEvent) {
                    data = {
                        reason: err.error.message,
                        status: err.status
                    };
                }
                else{
                    data = {
                        reason: err && err.error.reason ? err.error.reason : err.message,
                        status: err.status
                    };
                }
                // const error = err.error.message || err.statusText;
                this.errorDialog.openLoadErrorDialog(data);

                return throwError(data);
            }));
    }

}