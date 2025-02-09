import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
  path: '',
  loadChildren: () => import('mfe/AppModule').then((m) => m.AppModule)
  },
  {
    path: 'proof',
    loadChildren: () => import('mfeProof/MiModuloModule').then((m) => m.MiModuloModule)
    },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
