import {Component, OnInit} from '@angular/core';

import { User } from './models/user';
import { UserService } from './services/user.service';
import {Post} from './models/post';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ UserService ]
})
export class AppComponent implements OnInit {

  accion = 'Nuevo';
  editar = false;

  constructor(private _userService: UserService) { }

  userArray: User[];

  // public userArray = [];
  //
  // public postArray = [];

  selectedUser: User = new User();

  ngOnInit() {
    this._userService.getAllUsers()
                      .subscribe((data) => this.userArray = data);
  }

  save() {
    if (!this.editar) {
      this._userService.createUser(this.selectedUser).subscribe(
        response => {

              this.ngOnInit();
              this.selectedUser = new User();
              this.accion = 'Nuevo';
              this.editar = false;

        },
        error => {
          console.log(<any>error);
        }
      );
    } else {
      this._userService.updateUser(this.selectedUser).subscribe(
        response => {

          this.ngOnInit();
          this.selectedUser = new User();
          this.accion = 'Nuevo';
          this.editar = false;

        },
        error => {
          console.log(<any>error);
        }
      );
    }
  }

  select(user) {
    this.accion = "Editar";
    this.editar = true;
    this.selectedUser = user;
  }

  delete(user) {
    this._userService.deleteUser(user).subscribe(
      response => {

        this.ngOnInit();
        this.selectedUser = new User();
        this.accion = 'Nuevo';
        this.editar = false;

      },
      error => {
        console.log(<any>error);
      }
    );
  }

  cancel() {
    this.ngOnInit();
    this.selectedUser = new User();
    this.accion = 'Nuevo';
    this.editar = false;
  }

}
