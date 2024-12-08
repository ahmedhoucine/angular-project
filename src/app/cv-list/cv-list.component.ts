import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Cv } from '../model/cv.model';


@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent {
  @Input() cvs: Cv[] = [];
  @Output() cvSelected = new EventEmitter<Cv>();
  
  // Émet l'événement avec le CV sélectionné
  selectCv(cv: Cv) {
    this.cvSelected.emit(cv);
  }
}
