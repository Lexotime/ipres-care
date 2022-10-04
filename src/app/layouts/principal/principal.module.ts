import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalRoutingModule } from './principal-routing.module';
import { HomeComponent } from 'src/app/contents/home/home.component';
import { ChoiceComponent } from 'src/app/contents/choice/choice.component';
import { ConnexionComponent } from 'src/app/contents/connexion/connexion.component';
import { DomaineChoiceComponent } from 'src/app/contents/domaine-choice/domaine-choice.component';
import { ProfilChoiceComponent } from 'src/app/contents/profil-choice/profil-choice.component';
import { RendezVousComponent } from 'src/app/contents/rendez-vous/rendez-vous.component';
import { ProfilCheckComponent } from 'src/app/contents/profil-check/profil-check.component';
import { ProfilUpdateComponent } from 'src/app/contents/profil-update/profil-update.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [
    HomeComponent,
    ChoiceComponent,
    ConnexionComponent,
    DomaineChoiceComponent,
    ProfilChoiceComponent,
    RendezVousComponent,
    ProfilCheckComponent,
    ProfilUpdateComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class PrincipalModule { }
