import { Component, OnInit } from '@angular/core';
import { CommonsLibService, UserService } from '@commons-lib';

@Component({
  selector: 'app-mi-componente',
  standalone: false,
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.scss'
})
export class MiComponenteComponent {

  users: any[] = [];

    constructor(
      private _commonsLibService: CommonsLibService,
      private _userService: UserService
    ) {

     }

    changeState():void{
      this._commonsLibService.updateState('Jose')
    }

    getUsers() {
    this._userService.getUsers().subscribe((data) => {
      this.users = data;
    });
    console.log(this.users);
  }

}
