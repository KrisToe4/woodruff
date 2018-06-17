import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WoodruffComponent } from './woodruff/woodruff.component';
import { MatGridListModule, MatCardModule, MatMenuModule, MatIconModule, MatButtonModule, MatToolbarModule, MatListModule } from '@angular/material';
import { BioComponent } from './bio/bio.component';
import { ClassListComponent } from './class-list/class-list.component';
import { QuoteOfTheDayComponent } from './quote-of-the-day/quote-of-the-day.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { ClassesComponent } from './classes/classes.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { AboutComponent } from './about/about.component';
import { OutreachComponent } from './outreach/outreach.component';
import { GalleryComponent } from './gallery/gallery.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
    WoodruffComponent,
    BioComponent,
    ClassListComponent,
    QuoteOfTheDayComponent,
    PageNotFoundComponent,
    HomeComponent,
    ClassesComponent,
    ScheduleComponent,
    AboutComponent,
    OutreachComponent,
    GalleryComponent,
    BlogComponent
  ],
  imports: [
    AppRoutingModule,
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
