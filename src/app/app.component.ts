import { Component } from '@angular/core';

import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  accion = 'Nuevo';
  editar = false;

  userArray: User[] = [
    {id: 1, nombre: "Jose", telefono: 5512345678},
    {id: 1, nombre: "Luis", telefono: 5587654321},
    {id: 1, nombre: "Angel", telefono: 5518273645}
  ];

  selectedUser: User = new User();

  save() {
    if (!this.editar) {
      this.selectedUser.id = this.userArray.length + 1;
      this.userArray.push(this.selectedUser);
    }
    this.selectedUser = new User();
    this.accion = 'Nuevo';
    this.editar = false;
  }

  select(user) {
    this.accion = "Editar";
    this.editar = true;
    this.selectedUser = user;
  }

  delete(user) {
    this.userArray = this.userArray.filter( x => x != user );
    this.selectedUser = new User();
  }

  cancel() {
    this.selectedUser = new User();
    this.accion = 'Nuevo';
    this.editar = false;
  }

}
