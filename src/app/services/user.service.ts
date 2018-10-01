import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Post} from '../models/post';
import {Observable} from 'rxjs';
import {User} from '../models/user';

@Injectable()
export class UserService {

  private _url: string = "http://localhost:4000/api/v1";

  constructor( private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this._url + '/users');
  }

  createUser(user: User): Observable<User[]> {
    const headers = new HttpHeaders().set('Content-Type','application/json');
    return this.http.post<User[]>(this._url + '/users', user, {headers: headers});
  }
}
