import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatExpansionPanel } from '@angular/material';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.scss']
})
export class ClassesComponent implements OnInit {

  public requestedClass: string;
  private openedPanel: MatExpansionPanel;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {

    this.requestedClass = this.activatedRoute.snapshot.paramMap.get('name');
  }

  ngAfterViewInit() {
    
    if (this.openedPanel !== undefined) {

      this.ScrollToClass();
    }
  }

  ClassOpened(panel: MatExpansionPanel) {

    this.openedPanel = panel;
    if (document.readyState == "complete") {

      this.ScrollToClass();
    }
  }

  private ScrollToClass() {

    document.getElementById(this.openedPanel.id).scrollIntoView({block: "start", inline: "nearest"})
  }
}
