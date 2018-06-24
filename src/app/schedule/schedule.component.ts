import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent implements OnInit {

  headerCards = [
    { title: 'Monday', cols: 1, rows: 1, background: 'white' },
    { title: 'Tuesday', cols: 1, rows: 1, background: 'white' },
    { title: 'Wednesday', cols: 1, rows: 1, background: 'white' },
    { title: 'Thursday', cols: 1, rows: 1, background: 'white' },
    { title: 'Friday (SLCC)', cols: 1, rows: 1, background: 'white' },
  ]

  classCards = [
    // Morning Classes
    { title: '', cols: 1, rows: 3, background: 'white' },
    { title: '', cols: 1, rows: 3, background: 'white' },
    { title: 'Evergreen School', times: "All Day", cols: 1, rows: 6, background: 'white' },
    { title: '', cols: 1, rows: 3, background: 'white' },
    { title: 'Musical Beginnings', times: "9am-10am", cols: 1, rows: 1, background: 'white' },
    { title: 'Musical Beginnings', times: "10am-11am", cols: 1, rows: 1, background: 'white' },
    { title: 'Growing', times: "12:30pm-1:30pm", cols: 1, rows: 1, background: 'white' },
    // AFternoon/Evening Classes
    { title: 'Growing', times: "3pm-4pm", cols: 1, rows: 1, background: 'white' },
    { title: 'Adventures', subtitle: '(Beginner Marimba)', times: "3:15pm-4:15pm", cols: 1, rows: 1, background: 'white' },
    { title: 'Marimba 3', times: "3:30pm-4:30pm", cols: 1, rows: 1, background: 'white' },
    { title: '', cols: 1, rows: 3, background: 'white' },
    { title: 'Private', times: "4pm-5pm", cols: 1, rows: 1, background: 'white' },
    { title: 'Private', times: "4:15pm-5:15pm", cols: 1, rows: 2, background: 'white' },
    { title: '', cols: 1, rows: 1, background: 'white' },
    { title: 'Advanced Marimba', times: "5:30pm-6:30pm", cols: 1, rows: 1, background: 'white' },
    { title: 'Marimba 3+', times: "6pm-7pm", cols: 1, rows: 1, background: 'white' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
