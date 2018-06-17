import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { ClassesComponent } from './classes/classes.component';
import { GalleryComponent } from './gallery/gallery.component';
import { OutreachComponent } from './outreach/outreach.component';
import { ScheduleComponent } from './schedule/schedule.component';

const appRoutes: Routes = [
  { path: '',  component: HomeComponent },
  { path: 'about',  component: AboutComponent },
  { path: 'blog',  component: BlogComponent },
  { path: 'classes',  component: ClassesComponent },
  { path: 'gallery',  component: GalleryComponent },
  { path: 'outreach',  component: OutreachComponent },
  { path: 'schedule',  component: ScheduleComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(appRoutes), CommonModule ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
