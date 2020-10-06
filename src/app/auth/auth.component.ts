import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import * as AuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;

  constructor(private store: Store<{user: {email: string, password: string}}>) { }

  ngOnInit(): void {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email], []),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)], [])
    });
  }

  onSubmit() {
    this.store.dispatch(AuthActions.signup(
      {
        email: this.authForm.value.email,
        password: this.authForm.value.password
      }));
  }

}
