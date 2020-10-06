import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { SharedModule } from '../shared/shared.module';
import { AuthRoutingModule } from './auth-routing.module';
import { StoreModule } from '@ngrx/store';
import * as fromAuthState from './store';

@NgModule({
  declarations: [
    AuthComponent
  ],
  imports: [
    SharedModule,
    AuthRoutingModule,
    StoreModule.forFeature(fromAuthState.authStateFeatureKey, fromAuthState.reducers, { metaReducers: fromAuthState.metaReducers })
  ],
  exports: [],
  providers: []
})
export class AuthModule {}
