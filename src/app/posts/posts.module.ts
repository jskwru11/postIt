import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { PostsAddComponent } from './posts-add/posts-add.component';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsComponent } from './posts/posts.component';
import { PostsEditComponent } from './posts-edit/posts-edit.component';
import { PostsDetailComponent } from './posts-detail/posts-detail.component';
import { PostsRoutingModule } from './posts-routing.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PostEffects } from './store/post.effects';
import * as fromPost from './store/post.reducer';

@NgModule({
  declarations: [
    PostsComponent,
    PostsAddComponent,
    PostsListComponent,
    PostsEditComponent,
    PostsDetailComponent
  ],
  imports: [
    SharedModule,
    PostsRoutingModule,
    EffectsModule.forFeature([PostEffects]),
    StoreModule.forFeature(fromPost.postFeatureKey, fromPost.reducer),
    StoreModule.forFeature(fromPost.postsFeatureKey, fromPost.reducer)
  ],
  exports: [],
  providers: []
})
export class PostsModule {}
