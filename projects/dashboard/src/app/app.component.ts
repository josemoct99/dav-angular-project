import { Component } from '@angular/core';
import { CommonsLibService } from '@commons-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'dashboard';

  constructor(private _commonsLibService: CommonsLibService) {
    this._commonsLibService.state$.subscribe((state:any) =>{
      this.title = state.name;
    })
  }
}
