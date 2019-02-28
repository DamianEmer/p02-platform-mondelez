import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(password: string, username?: string): Observable<any> {
    return this.http.post<any>(`https://reqres.in/api/login`, { email: username, password: password })
      .pipe(map(user => {
        if(user) {
          user.authdata = window.btoa(username + " : " + password );
          localStorage.setItem('currentUser', user.token);
        }
        return user;
      }
    ));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
