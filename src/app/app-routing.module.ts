import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarteVisiteComponent } from './carte-visite/carte-visite.component';
import { ColorChangerComponent } from './color-changer/color-changer.component';
import { CvPlatformComponent } from './cv-platform/cv-platform.component';
import { MiniWordComponent } from './mini-word/mini-word.component';
import { RainbowComponent } from './rainbow/rainbow.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'carte_visite', component: CarteVisiteComponent },
  { path: 'color_changer', component: ColorChangerComponent },
  { path: 'cv_platforme', component: CvPlatformComponent },
  { path: 'mini_word', component: MiniWordComponent },
  { path: 'rainbow', component: RainbowComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
