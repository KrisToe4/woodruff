import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  goals = [
    "to nurture the development of the WHOLE child",
    "to encourage creativity and good self esteem",
    "to develop a joyful attitude towards music",
    "to encourage families to make music together",
    "to strive for beauty and pleasure in the PROCESS as well as the product",
    "to develop sensitivity to the natural world around us through active listening and observing",
    "to expose families to a wide variety of musical experiences & instruments and to develop an interest to explore and discover more about music",
    "to provide many varied opportunities to sing, move, listen, explore, play &amp; create, thereby encouraging a range of avenues for self-expression"
  ];

  constructor() { }

  ngOnInit() {
  }

}
