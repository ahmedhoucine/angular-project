import { Component, Input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { SubjectService } from '../subject.service';

@Component({
  selector: 'app-cv-list',
  templateUrl: './cv-list.component.html',
  styleUrls: ['./cv-list.component.css']
})
export class CvListComponent {
  @Input() cvs: Cv[] = [];

  constructor(private subjectService: SubjectService) {}

  selectCv(cv: Cv) {
    this.subjectService.selectCv(cv);
  }
}
