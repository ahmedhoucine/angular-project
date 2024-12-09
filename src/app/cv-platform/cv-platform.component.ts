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
  ) {}
  async ngOnInit() {
    await this.cvService.getcvs(); 
    this.cvs=this.cvService.cvs
    console.log('cvs from cv platform',this.cvs)
  }
 
  

  onSelectCv(cv: Cv) {
    this.selectedCv = cv;
  }
  
  

}
