import { Injectable } from '@angular/core';
import { HttpRequest, 
    HttpHandler, 
    HttpEvent, 
    HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SimpleAuthInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        //Aggrega encabezado de autorizacion con credenciales de autentitacion basicas si estan disnponibles
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if(currentUser && currentUser.authdata) {
            request = request.clone({
                setHeaders: {
                    Authorization: `Basic ${currentUser.authdata}`
                }
            });
        }
        return next.handle(request); 
    }

}