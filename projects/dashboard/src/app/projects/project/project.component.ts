import { Component, OnInit } from '@angular/core';
import { CommonsLibService, UserService } from '@commons-lib';

@Component({
  selector: 'app-project',
  standalone: false,
  templateUrl: './project.component.html',
  styleUrl: './project.component.scss'
})
export class ProjectComponent {

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
