import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import * as AuthActions from './auth.actions';
import { AuthService } from '../auth.service';



@Injectable()
export class AuthEffects {

  signup$ = createEffect( () => this.actions$.pipe(
    ofType(AuthActions.signup),
    mergeMap(action => this.authService.signUp(action.email, action.password)
    .pipe(map(user => AuthActions.signupSuccess(
      {
      email: user.email,
      userId: user.localId,
      token: user.idToken,
      expirationDate: new Date(new Date().getTime() + +user.expiresIn * 1000)
    })),
    catchError(error => of(AuthActions.signupFailure({error})
      ))
    )
  )
  ));

  constructor(private actions$: Actions,
              private http: HttpClient,
              private authService: AuthService) {}
}
