import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MiComponenteComponent } from './mi-componente/mi-componente.component';

import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: MiComponenteComponent }];

@NgModule({
  declarations: [
    MiComponenteComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class MiModuloModule { }
