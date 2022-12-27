import { EVENT } from 'src/app/data/dummy';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medecin',
  templateUrl: './medecin.component.html',
  styleUrls: ['./medecin.component.css']
})
export class MedecinComponent implements OnInit {

  constructor() { }

  events: any = EVENT;
  ngOnInit(): void {
  }

}
