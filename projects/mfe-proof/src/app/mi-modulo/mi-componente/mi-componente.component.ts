import { Component } from '@angular/core';
import { CommonsLibService } from '@commons-lib';

@Component({
  selector: 'app-mi-componente',
  standalone: false,
  templateUrl: './mi-componente.component.html',
  styleUrl: './mi-componente.component.scss'
})
export class MiComponenteComponent {
    constructor(private _commonsLibService: CommonsLibService) { }

    changeState():void{
      this._commonsLibService.updateState('Jose')
    }

}
