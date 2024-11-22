import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';

@NgModule({
  declarations: [
    AppComponent,
    ColorChangerComponent,
    CarteVisiteComponent
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
