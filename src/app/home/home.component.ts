import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards = [
    { title: 'Description', cols: 1, rows: 1 },
    { title: 'SmallImage', cols: 1, rows: 1},
    { title: 'BigImage', cols: 2, rows: 1 },
  ];

  constructor() { }

  ngOnInit() {
  }

}
