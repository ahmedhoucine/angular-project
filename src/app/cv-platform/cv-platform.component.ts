import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvServiceService } from '../cv-service.service';
import { EmbaucheServiceService } from '../embauche-service.service';

@Component({
  selector: 'app-cv-platform',
  templateUrl: './cv-platform.component.html',
  styleUrls: ['./cv-platform.component.css']
})
export class CvPlatformComponent {
  cvs: Cv[] = [];
  selectedCv: Cv | null = null;

  constructor(
    private cvService: CvServiceService,
    private embaucheService: EmbaucheServiceService
  ) {
    this.cvs = this.cvService.getCvs();

  }
  async ngOnInit() {
    this.loadCvs();
  }
  loadCvs(): void {
    this.cvService.fetchCVs().subscribe((data) => {
      this.cvs = data;
    });
  }

  onSelectCv(cv: Cv) {
    this.selectedCv = cv;
  }
  


}
