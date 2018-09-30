import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return [
      {id: 1, nombre: "Jose", telefono: 5512345678},
      {id: 1, nombre: "Luis", telefono: 5587654321},
      {id: 1, nombre: "Angel", telefono: 5518273645}
    ];
  }
}
