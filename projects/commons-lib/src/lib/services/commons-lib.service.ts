import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonsLibService {
  
  private stateSource = new BehaviorSubject<any>(null);
  state$ = this.stateSource.asObservable();

  updateState(data: any) {
    this.stateSource.next(data);
  }
}
