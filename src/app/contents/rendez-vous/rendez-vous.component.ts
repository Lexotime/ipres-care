import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  isChoosingFirst = true;
  isChoosingSecond = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  chooseSecond(){
    this.isChoosingFirst = false;
    this.isChoosingSecond = true;
  }

  getBack(){
    this.isChoosingFirst = true;
    this.isChoosingSecond = false;
  }

  submit(){
    Swal.fire({
      icon: 'success',
      title: 'Vous recevrez une date vous indiquant la date finale de votre rendez vous.'
    });
  }
}
