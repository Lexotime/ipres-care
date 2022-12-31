import { Component, OnInit } from '@angular/core';
import { MatCalendarCellCssClasses } from '@angular/material/datepicker';
import { MOMENT } from 'angular-calendar';
import Swal from 'sweetalert2';
//@ts-ignore
import Moment from 'moment';
import { extendMoment, DateRange } from 'moment-range';
//@ts-ignore
import _ from 'lodash';

import { EVENT } from 'src/app/data/dummy';

const moment = extendMoment(Moment);

@Component({
  selector: 'app-rendez-vous',
  templateUrl: './rendez-vous.component.html',
  styleUrls: ['./rendez-vous.component.css']
})
export class RendezVousComponent implements OnInit {

  isChoosingFirst = true;
  isChoosingSecond = false;
  selectedFDate: any = {};
  selectedSDate: any = {};

  events: any = EVENT;

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

  onSelect(date: any){
    console.log(date);
    if (this.isChoosingFirst)
      this.selectedFDate= date;
    else 
      this.selectedSDate= date;
  }

//   daysSelected: any[] = [];
// event: any;


// selectedDate!: Date;
// selectedMonth!: string; // in the format of MM-YYYY

// shiftPressed!: boolean;
// beginSelection!: Date;
// endSelection!: Date;

// selectedRanges: {
//   monthId: string,
//   ranges: DateRange[]
// }[] = [];// ranges from all time

// dateClass() {
//   return (date: Date): MatCalendarCellCssClasses => {
//     let classToReturn = '';
//     let currentMonthId = moment(date).format('MM-YYYY');
//     let currentMonth = _.find(this.selectedRanges, {monthId : currentMonthId});

//     _.forEach(currentMonth.ranges, function(range: any) {
//       if (range.start.isSame(date)){
//         classToReturn = 'special-date-start';
//       }else if (range.end.isSame(date)){
//         classToReturn = 'special-date-end';
//       } else if (range.contains(date)){
//         classToReturn = 'special-date';
//       }
//     }); 
//     return classToReturn;
//   }}

// select(event: any, calendar: any) {
//   const date =
//     event.getFullYear() +
//     "-" +
//     ("00" + (event.getMonth() + 1)).slice(-2) +
//     "-" +
//     ("00" + event.getDate()).slice(-2);
//   const index = this.daysSelected.findIndex(x => x == date);
//   if (index < 0) this.daysSelected.push(date);
//   else this.daysSelected.splice(index, 1);

//   calendar.updateTodaysDate();
// }

  isValidate: boolean = false;
  submit(){
    this.isChoosingSecond = false;
    this.isValidate = true;
    Swal.fire({
      icon: 'success',
      title: 'Vous recevrez une date vous indiquant la date finale de votre rendez vous.'
    });
  }
}
