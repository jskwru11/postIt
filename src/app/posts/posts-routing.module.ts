import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsAddComponent } from './posts-add/posts-add.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { PostsEditComponent } from './posts-edit/posts-edit.component';

const routes: Routes = [
  {
    path: '', children: [
      {
        path: '', component: PostsListComponent
      },
      {
        path: 'add', component: PostsAddComponent
      },
      {
        path: ':id', component: PostsDetailComponent
      },
      {
        path: ':id/edit', component: PostsEditComponent
      }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: []
})
export class PostsRoutingModule {}
