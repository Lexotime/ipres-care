import { LIEU } from './../../data/dummy';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-domaine-choice',
  templateUrl: './domaine-choice.component.html',
  styleUrls: ['./domaine-choice.component.css']
})
export class DomaineChoiceComponent implements OnInit {

  lieu : any = LIEU;
  choix_lieu: any;

  constructor() { }

  ngOnInit(): void {
  }

}
