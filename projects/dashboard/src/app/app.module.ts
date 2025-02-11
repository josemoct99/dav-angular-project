import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { CommonsLibModule } from '@commons-lib';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    CommonsLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
