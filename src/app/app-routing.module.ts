import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './layouts/principal/principal.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    component: PrincipalComponent,
    path: '',
    children: [
      {
        path: '',
        loadChildren: () => import('src/app/layouts/principal/principal.module').then(m => m.PrincipalModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
