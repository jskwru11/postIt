import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Post } from './models/posts.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get('https://mypostit-4689c.firebaseio.com/posts.json');
  }

  savePost(post: Post) {
    const postArray = [];
    postArray.push(post);
    return this.http.put('https://mypostit-4689c.firebaseio.com/posts.json',
                          postArray
                        );
  }
}
