import { MedecinComponent } from './../medecin/medecin.component';
import { PatientComponent } from './../patient/patient.component';
import { AdminComponent } from './../admin/admin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChoiceComponent } from 'src/app/contents/choice/choice.component';
import { ConnexionComponent } from 'src/app/contents/connexion/connexion.component';
import { DomaineChoiceComponent } from 'src/app/contents/domaine-choice/domaine-choice.component';
import { HomeComponent } from 'src/app/contents/home/home.component';
import { ProfilCheckComponent } from 'src/app/contents/profil-check/profil-check.component';
import { ProfilChoiceComponent } from 'src/app/contents/profil-choice/profil-choice.component';
import { ProfilUpdateComponent } from 'src/app/contents/profil-update/profil-update.component';
import { RendezVousComponent } from 'src/app/contents/rendez-vous/rendez-vous.component';

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
    path: 'connexion/:id',
    component: ConnexionComponent
  },
  {
    path: 'admin',
    component: AdminComponent
  },
  // {
  //   path: 'patient',
  //   component: PatientComponent
  // },
  {
    path: 'medecin',
    component: MedecinComponent
  },
  {
    path: 'patient',
    component: DomaineChoiceComponent
  },
  {
    path: 'profil-choice',
    component: ProfilChoiceComponent
  },
  {
    path: 'rendez-vous',
    component: RendezVousComponent
  },
  {
    path: 'profil-check',
    component: ProfilCheckComponent
  },
  {
    path: 'profil-update',
    component: ProfilUpdateComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PrincipalRoutingModule { }
