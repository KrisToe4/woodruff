import { Component } from '@angular/core';
import { BioComponent } from '../bio/bio.component';

@Component({
  selector: 'woodruff',
  templateUrl: './woodruff.component.html',
  styleUrls: ['./woodruff.component.scss']
})
export class WoodruffComponent {
  cards = [
    { title: 'content', cols: 3, rows: 12, background: 'white' },
    { title: 'bio', cols: 1, rows: 4, background: 'transparent'},
    { title: 'classes', cols: 1, rows: 3, background: 'transparent'},
    { title: 'quote', cols: 1, rows: 5, background: 'transparent'}
  ];
}
