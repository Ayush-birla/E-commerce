import { Injectable } from '@angular/core';
import { BASE_API_URL } from '../../Config/api';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { log } from 'console';
import { catchError, map, of } from 'rxjs';
import { loginFailure, loginSuccess, registerFailure, registerSuccess } from './auth.actions';

@Injectable({
    providedIn: 'root',
})
export class AuthService {
  private apiUrl = BASE_API_URL + '/auth';

  constructor(private http: HttpClient, private store: Store) {}

  login(loginData: any) {
    return this.http.post(`${this.apiUrl}/signin`, loginData).pipe(
      map((user: any) => {
        console.log('login user', user);
        if (user.jwt) {
          localStorage.setItem('jwt', user.jwt);
        }
        return loginSuccess({ user });
      }),
      catchError((error) => {
        return of(
          loginFailure(
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      })
    ).subscribe((action)=>{
         return this.store.dispatch(action)
    })
  }

//   Registration

  register(user: any) {
    return this.http.post(`${this.apiUrl}/signup`, user).pipe(
      map((user: any) => {
        console.log('register user', user);
        if (user.jwt) {
          localStorage.setItem('jwt', user.jwt);
        }
        return registerSuccess({ user });
      }),
      catchError((error) => {
        return of(
          registerFailure(
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message
          )
        );
      })
    ).subscribe((action)=>{
         return this.store.dispatch(action)
    })
  }
}
