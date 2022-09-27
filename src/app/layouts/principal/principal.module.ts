import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { HomeComponent } from 'src/app/contents/home/home.component';
import { ChoiceComponent } from 'src/app/contents/choice/choice.component';
import { ConnexionComponent } from 'src/app/contents/connexion/connexion.component';


@NgModule({
  declarations: [
    HomeComponent,
    ChoiceComponent,
    ConnexionComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule
  ]
})
export class PrincipalModule { }
