import { NgModule } from '@angular/core';
import { CommonsLibComponent } from './components/commons-lib.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    CommonsLibComponent,
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    CommonsLibComponent,
    HttpClientModule
  ]
})
export class CommonsLibModule { }
