import { Component } from '@angular/core';
import { BioComponent } from '../bio/bio.component';

@Component({
  selector: 'woodruff',
  templateUrl: './woodruff.component.html',
  styleUrls: ['./woodruff.component.scss']
})
export class WoodruffComponent {
  cards = [
    { title: 'Content', cols: 3, rows: 3, background: 'white' },
    { title: 'Bio', cols: 1, rows: 1, background: 'transparent'},
    { title: 'ClassList', cols: 1, rows: 1, background: 'transparent'},
    { title: 'QuoteOfTheDay', cols: 1, rows: 1, background: 'transparent'}
  ];
}
