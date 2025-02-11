import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('auth/AppModule').then((m) => m.AppModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('dashboard/ProjectModule').then((m) => m.ProjectModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
