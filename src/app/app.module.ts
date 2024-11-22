import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { ColorDisplayComponent } from './color-display/color-display.component';
import { CvPlatformComponent } from './cv-platform/cv-platform.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangerComponent,
    CarteVisiteComponent,
    ColorDisplayComponent,
    CvPlatformComponent,
    CvListComponent,
    CvDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
