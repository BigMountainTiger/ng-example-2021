import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bootstrap-example-date-picker',
  templateUrl: './bootstrap-example-date-picker.component.html',
  styleUrls: ['./bootstrap-example-date-picker.component.scss']
})
export class BootstrapExampleDatePickerComponent implements OnInit {

  public model: NgbDateStruct;
  public date: {year: number, month: number};

  constructor(private calendar: NgbCalendar) {

    this.model = this.calendar.getToday();
    this.date = {
      year: this.model.year,
      month: this.model.month
    };

  }

  ngOnInit(): void {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }

}
