import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../models/post';
import {Observable} from 'rxjs';

@Injectable()
export class UserService {

  private _url: string = "https://jsonplaceholder.typicode.com/posts";

  constructor( private http: HttpClient) {}

  getUsers() {
    return [
      {id: 1, nombre: "Jose", telefono: 5512345678},
      {id: 2, nombre: "Luis", telefono: 5587654321},
      {id: 3, nombre: "Angel", telefono: 5518273645},
      {id: 4, nombre: "Juan", telefono: 551020304}
    ];
  }

  getArticulos(): Observable<Post[]> {
    return this.http.get<Post[]>(this._url);
  }
}
