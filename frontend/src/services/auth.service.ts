import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Login, Register } from '../interfaces/auth';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _http;
  constructor(private http: HttpClient) {
    this._http = http;
  }

  registerUser(register: Register): Observable<string> {
    return this._http.post<string>("", register, {

    });
  }

  loginUser(login: Login): Observable<string> {
    return this._http.post<string>("", login, {

    })
  }

}
