import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WoodruffComponent } from './woodruff/woodruff.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatListModule } from '@angular/material';
import { BioComponent } from './bio/bio.component';
import { ClassListComponent } from './class-list/class-list.component';
import { QuoteOfTheDayComponent } from './quote-of-the-day/quote-of-the-day.component';

@NgModule({
  declarations: [
    AppComponent,
    WoodruffComponent,
    BioComponent,
    ClassListComponent,
    QuoteOfTheDayComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
