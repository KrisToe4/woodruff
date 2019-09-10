import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  headerColor = "rgba(163, 177, 43, .3)";
  activeColor = "rgba(163, 177, 43, .2)";
  inactiveColor = "";

  headerCards = [
    { title: 'Monday', cols: 1, rows: 1, background: this.headerColor },
    { title: 'Tuesday', cols: 1, rows: 1, background: this.headerColor },
    { title: 'Wednesday', cols: 1, rows: 1, background: this.headerColor },
    { title: 'Thursday', cols: 1, rows: 1, background: this.headerColor },
    { title: 'Friday (SLCC)', cols: 1, rows: 1, background: this.headerColor },
  ]

  classCards = [
    // Morning Classes
    { title: '', cols: 1, rows: 3, background: this.activeColor },
    { title: '', cols: 1, rows: 3, background: this.activeColor },
    { title: 'Evergreen School', times: "All Day", cols: 1, rows: 5, background: this.activeColor },
    { title: '', cols: 1, rows: 3, background: this.activeColor },
    { title: 'Musical Beginnings', times: "9am - 10am", link: "beginnings", cols: 1, rows: 1, background: this.activeColor },
    { title: 'Musical Beginnings', times: "10am - 11am", link: "beginnings", cols: 1, rows: 1, background: this.activeColor },
    { title: 'Growing6', times: "12:30pm - 1:30pm", link: "growing", cols: 1, rows: 1, background: this.activeColor },
    // AFternoon/Evening Classes
    { title: 'Marimba 2', times: "3:15pm - 4:15pm", link: "marimba2", cols: 1, rows: 1, background: this.activeColor },
    { title: 'Marimba 1', times: "3:15pm - 4:15pm", link: "marimba1", cols: 1, rows: 1, background: this.activeColor },
    { title: 'Advanced Marimba', times: "3:30pm - 4:45pm", link: "marimba4", cols: 1, rows: 1, background: this.activeColor },
    { title: '', cols: 1, rows: 2, background: this.activeColor },
    { title: 'Marimba 3', times: "4:15pm - 5:15pm", link: "marimba3", cols: 1, rows: 1, background: this.activeColor },
    { title: 'Advanced Marimba', times: "3:30pm - 4:45pm", link: "marimba4", cols: 1, rows: 1, background: this.activeColor },
    { title: '', cols: 1, rows: 1, background: this.activeColor },
  ];

  constructor() { }

  ngOnInit() {
  }

}
