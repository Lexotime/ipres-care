import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejs-calendare',
  templateUrl: './ejs-calendare.component.html',
  styleUrls: ['./ejs-calendare.component.css']
})
export class EjsCalendareComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public month: number = new Date().getMonth();
  public fullYear: number = new Date().getFullYear();
  public dateValue: Date = new Date(this.fullYear, this.month , 11);
  public minDate: Date = new Date(this.fullYear, this.month , 9);
  public maxDate: Date = new Date(this.fullYear, this.month, 15);

  public dateValues: Date[] = [new Date('1/1/2020'), new Date('1/15/2020'), new Date('1/3/2020'), new Date('1/25/2020')];
    public multiSelect: Boolean = true;

}
