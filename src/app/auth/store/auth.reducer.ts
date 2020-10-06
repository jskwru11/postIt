import { createReducer, on } from '@ngrx/store';

import * as AuthActions from './auth.actions';
import { User } from '../models/user.model';

export interface AuthState {
  user: User;
  error: any;
}

export const initialState = {
  user: undefined,
  error: undefined
};

const _authReducers = createReducer(
  initialState,
  // on(AuthActions.login, (state, action) => ({...state, user: action })),
  on(AuthActions.logout, state => ({...state, user: null })),
  on(AuthActions.signupSuccess, (state, action) => ({...state, user: new User(
    action.email, action.userId, action.token, action.expirationDate
  ) })),
  on(AuthActions.signupFailure, (state, action) => ({...state, error: action.error}))
);

export function authReducer(state, action) {
  return _authReducers(state, action);
}
