import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { catchError, map, of } from 'rxjs';
import { BASE_API_URL } from '../../Config/api';
import { getUserProfileFailure, getUserProfileSuccess, logoutSuccess } from './user.action';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = BASE_API_URL + '/api';
  header: any;
  constructor(private http: HttpClient, private store: Store) {
    if(typeof localStorage !=='undefined')
    {this.header = new HttpHeaders().set(
      'Authorization',
      `Bearer ${localStorage.getItem('jwt')}`
    );}
    else
    {
        console.error('undefiend local storage :');
        
    }
  }

  getUserProfile() {
    const headers=new HttpHeaders().set(
        'Authorization',
        `Bearer ${localStorage.getItem('jwt')}`)
    return this.http
      .get(`${this.apiUrl}/users/profile`, { headers })
      .pipe(
        map((user: any) => {
          console.log('user profile getting..', user);
          if (user.jwt) {
            localStorage.setItem('jwt', user.jwt);
          }
          return getUserProfileSuccess({ userProfile: user });
        }),
        catchError((error) => {
          return of(
            getUserProfileFailure(
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message
            )
          );
        })
      )
      .subscribe((action) => {
        return this.store.dispatch(action);
      });
  }


  logout(){
    localStorage.removeItem('jwt')
    this.store.dispatch(logoutSuccess())
  }
}
