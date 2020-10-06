import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Post } from '../models/posts.model';
import { PostService } from '../post.service';
import * as PostActions from '../store/post.actions';

@Component({
  selector: 'app-posts-list',
  templateUrl: './posts-list.component.html',
  styleUrls: ['./posts-list.component.css']
})
export class PostsListComponent implements OnInit {
  posts: Observable<any>;

  constructor(private postService: PostService,
              private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(PostActions.loadPosts());
    // this.postService.getPosts().subscribe(
    //   data => console.log(data)
    // );
    this.posts = this.store.select('posts');
  }

}
