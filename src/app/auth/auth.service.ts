import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

export interface AuthDataResponse {
  email: string;
  expiresIn: string;
  idToken: string;
  kind: string;
  localId: string;
  refreshToken: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  signupURL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.apiKey}`;

  signUp(email: string, password: string) {
    return this.http.post<AuthDataResponse>(this.signupURL, {
      email,
      password,
      returnSecureToken: true
    });
  }

  constructor(private http: HttpClient) { }
}
