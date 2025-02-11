import { Component } from '@angular/core';
import { UserService } from '@commons-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {

  constructor(private _userService: UserService) { }

  email: string = '';

  password: string = '';

  onSubmit() {
    this._userService.createUser(this.email, this.password);
  }


}
