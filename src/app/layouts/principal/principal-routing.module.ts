import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceComponent } from 'src/app/contents/choice/choice.component';
import { ConnexionComponent } from 'src/app/contents/connexion/connexion.component';
import { HomeComponent } from 'src/app/contents/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'choice',
    component: ChoiceComponent
  },
  {
    path: 'connexion',
    component: ConnexionComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
