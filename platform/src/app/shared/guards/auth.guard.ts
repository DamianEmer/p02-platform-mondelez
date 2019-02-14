import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
    
    constructor ( private router: Router ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        let currentUser = localStorage.getItem('currentUser');
        if(currentUser){
            return true;// Cuando se logea retorna verdadero
        }
        // Si no esta logeado lo retorna a la pagina de login
    this.router.navigate(['/login']);
    return false;
    }
}