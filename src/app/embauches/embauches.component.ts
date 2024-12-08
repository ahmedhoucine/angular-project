import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheServiceService } from '../embauche-service.service';

@Component({
  selector: 'app-embauches',
  templateUrl: './embauches.component.html',
  styleUrls: ['./embauches.component.css']
})
export class EmbauchesComponent {
  embauches: Cv[] = [];
  constructor(
    private embaucheService: EmbaucheServiceService
  ) {
    this.embauches = this.embaucheService.getEmbauches();

  }

}
