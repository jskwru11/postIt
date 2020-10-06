import { createAction, props } from '@ngrx/store';

export const login = createAction('[Auth Component] Login User',
props<{email: string, password: string}>()
);
export const logout = createAction('[Auth Component] Logout User');
export const signup = createAction('[Auth Component] Signup User',
props<{email: string, password: string}>()
);
export const signupSuccess = createAction(
  '[Auth Effect Triggered] Signup Success',
  props<{
    email: string;
    userId: string;
    token: string;
    expirationDate: Date;
  }>()
);
export const signupFailure = createAction(
  '[Auth Effect Triggered] Signup Failure',
  props<{ error: any}>()
);
