import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import * as fromAuth from '../auth/store/auth.reducer';
import * as fromPosts from '../posts/store/post.reducer';


export interface AppState {
  auth: fromAuth.AuthState;
  posts: fromPosts.PostState;
}

export const reducers: ActionReducerMap<AppState> = {
  auth: fromAuth.authReducer,
  posts: fromPosts.reducer
};

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    console.log('state', state);
    console.log('action', action);

    return reducer(state, action);
  };
}


export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [debug] : [];
