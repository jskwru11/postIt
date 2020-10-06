import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromReducer from './post.reducer';

export const postFeatureSelector = createFeatureSelector<fromReducer.PostState>(
  fromReducer.postsFeatureKey
);

export const selectPosts = createSelector(
  postFeatureSelector, fromReducer.selectAll
);

// export const selectedPost = createSelector(
//   postFeatureSelector, (state: fromReducer.PostState) => state.ids
// );

