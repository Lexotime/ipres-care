import { LIEU } from './../../data/dummy';
import { EVENT, MEDECIN } from 'src/app/data/dummy';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  events: any = EVENT;
  selectedDate: any = "";

  choix!: any;
  domaine!: any;
  medecin!: any;
  medecins: any = MEDECIN;


  lieu : any = LIEU;
  choix_lieu: any;


  annuler(item: any, moment: string) {
    this.events.filter((ev: any) => (ev.date === item))[0][moment].disponible = false;
  }

  restaurer (item: any, moment: string) {
    this.events.filter((ev: any) => (ev.date === item))[0][moment].disponible = true;
  }

  onChoose () {
    this.choix = "aa";
    this.domaine = "aa";
  }
}
