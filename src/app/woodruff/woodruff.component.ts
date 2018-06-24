import { Component } from '@angular/core';
import { BioComponent } from '../bio/bio.component';

@Component({
  selector: 'woodruff',
  templateUrl: './woodruff.component.html',
  styleUrls: ['./woodruff.component.scss']
})
export class WoodruffComponent {
  cards = [
    { title: 'content', cols: 3, rows: 3, background: 'white' },
    { title: 'bio', cols: 1, rows: 1, background: 'transparent'},
    { title: 'classes', cols: 1, rows: 1, background: 'transparent'},
    { title: 'quote', cols: 1, rows: 1, background: 'transparent'}
  ];
}
