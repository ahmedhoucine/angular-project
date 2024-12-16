import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheServiceService } from '../embauche-service.service';


@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent {
  embauches: Cv[] = [];

  constructor(
    private embaucheService: EmbaucheServiceService

  ){
    this.embauches = this.embaucheService.getEmbauches();
  }
  @Input() cv: Cv | null = null;
  Embaucher(cv: Cv) {
    this.embaucheService.addEmbauche(cv);
    console.log(this.embauches)
  }
}
