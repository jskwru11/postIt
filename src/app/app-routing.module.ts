import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: '/auth', pathMatch: 'full'},
  {path: 'auth', loadChildren: () => import('./auth/auth-routing.module')
  .then(m => m.AuthRoutingModule)
  },
  {path: 'posts', loadChildren: () => import('./posts/posts-routing.module')
  .then(m => m.PostsRoutingModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
