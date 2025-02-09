import { Component, OnInit } from '@angular/core';
import { CommonsLibService } from '@commons-lib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'mfe';
  constructor(private _commonsLibService: CommonsLibService) { }

  ngOnInit(): void {
    this._commonsLibService.state$.subscribe((state:any) => {
      this.title = state;
    });
  }
}
