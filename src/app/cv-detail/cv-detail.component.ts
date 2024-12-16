import { Component, Input, OnInit } from '@angular/core';
import { Cv } from '../model/cv.model';
import { SubjectService } from '../subject.service';
import { EmbaucheServiceService } from '../embauche-service.service';

@Component({
  selector: 'app-cv-detail',
  templateUrl: './cv-detail.component.html',
  styleUrls: ['./cv-detail.component.css']
})
export class CvDetailComponent implements OnInit {
  @Input() cv: Cv | null = null;
  embauches: Cv[] = [];

  constructor(
    private subjectService: SubjectService,
    private embaucheService: EmbaucheServiceService
  ) {}

  ngOnInit() {
    this.embauches = this.embaucheService.getEmbauches();
    this.subjectService.cvSelected$.subscribe((selectedCv) => {
      this.cv = selectedCv;
    });
  }

  Embaucher(cv: Cv) {
    this.embaucheService.addEmbauche(cv);
    console.log(this.embauches);
  }
}
