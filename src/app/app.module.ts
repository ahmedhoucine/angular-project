import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { ColorDisplayComponent } from './color-display/color-display.component';
import { CvPlatformComponent } from './cv-platform/cv-platform.component';
import { CvListComponent } from './cv-list/cv-list.component';
import { CvDetailComponent } from './cv-detail/cv-detail.component';
import { DefaultImagePipe } from './default-image.pipe';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowDirective } from './rainbow.directive';
import { RainbowComponent } from './rainbow/rainbow.component';
import { EmbauchesComponent } from './embauches/embauches.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CvModificationComponent } from './cv-modification/cv-modification.component';
import { FormComponent } from './form/form.component';
import { ImageCarouselComponent } from './image-carousel/image-carousel.component';
import { CvServiceService } from './cv-service.service';

export function initializeApp(apiService: CvServiceService) {
  return () => apiService.fetchData(); 
}

@NgModule({
  declarations: [
    AppComponent,
    ColorChangerComponent,
    CarteVisiteComponent,
    ColorDisplayComponent,
    CvPlatformComponent,
    CvListComponent,
    CvDetailComponent,
    DefaultImagePipe,
    MiniWordComponent,
    RainbowDirective,
    RainbowComponent,
    EmbauchesComponent,
    NavbarComponent,
    CvModificationComponent,
    FormComponent,
    ImageCarouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 3000,
      positionClass: 'toast-top-right',
      preventDuplicates: true
    }),
  ],
  providers: [
    CvServiceService,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [CvServiceService],
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
