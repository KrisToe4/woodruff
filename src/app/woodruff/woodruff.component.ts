import { Component } from '@angular/core';

@Component({
  selector: 'woodruff',
  templateUrl: './woodruff.component.html',
  styleUrls: ['./woodruff.component.scss']
})
export class WoodruffComponent {
  cards = [
    { title: 'Content', cols: 1, rows: 3 },
    { title: 'Bio', cols: 1, rows: 1 },
    { title: 'Classes', cols: 1, rows: 1 },
    { title: 'Quote', cols: 1, rows: 1 }
  ];
}
