import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UUID } from 'angular2-uuid';

import { PostService } from '../post.service';
import { Post } from '../models/posts.model';

@Component({
  selector: 'app-posts-add',
  templateUrl: './posts-add.component.html',
  styleUrls: ['./posts-add.component.css']
})
export class PostsAddComponent implements OnInit {
  addPostForm: FormGroup;

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
    this.addPostForm = new FormGroup({
      title: new FormControl(null, [Validators.required], []),
      author: new FormControl(null, [Validators.required], []),
      date: new FormControl(null, [Validators.required], []),
      body: new FormControl(null, [Validators.required], [])
    }
    );
  }

  onAdd() {
    const id = UUID.UUID();
    const newPost: Post = new Post(
      this.addPostForm.value.title,
      this.addPostForm.value.author,
      this.addPostForm.value.body,
      this.addPostForm.value.date,
      id
    );
    this.postService.savePost(newPost)
      .subscribe(data => {
        console.log(data);
      });
    this.addPostForm.reset();
    this.router.navigate(['/posts']);
  }

}
