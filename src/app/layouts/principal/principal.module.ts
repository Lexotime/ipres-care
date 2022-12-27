import { EjsCalendareComponent } from './../../components/ejs-calendare/ejs-calendare.component';
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
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';

@NgModule({
  declarations: [
    HomeComponent,
    ChoiceComponent,
    ConnexionComponent,
    DomaineChoiceComponent,
    ProfilChoiceComponent,
    RendezVousComponent,
    ProfilCheckComponent,
    ProfilUpdateComponent,
    EjsCalendareComponent
  ],
  imports: [
    CommonModule,
    PrincipalRoutingModule,
    CalendarModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class PrincipalModule { }
