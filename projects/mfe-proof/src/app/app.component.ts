import { Component } from '@angular/core';
import { CommonsLibService, State } from '@commons-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'mfeProof';

  constructor(private _commonsLibService: CommonsLibService) {
    this._commonsLibService.state$.subscribe((state:State) =>{
      this.title = state.name;
    })
  }
}
