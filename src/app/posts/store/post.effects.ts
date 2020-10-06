import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

import * as PostActions from './post.actions';
import { PostService } from '../post.service';
import { Post } from '../models/posts.model';



@Injectable()
export class PostEffects {
  loadPosts$ = createEffect(() => this.actions$.pipe(
    ofType(PostActions.loadPosts),
    mergeMap(() => this.postService.getPosts().pipe(
      map((posts: Post[]) => PostActions.loadPostsSuccess({posts})),
      catchError(error => of(PostActions.loadPostsFailure({error})))
    ))
  ));


  constructor(private actions$: Actions,
              private postService: PostService) {}

}
