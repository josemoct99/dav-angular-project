import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CommonsLibModule } from '@commons-lib';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: AppComponent }];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forChild(routes),
    CommonsLibModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
