import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvServiceService } from '../cv-service.service';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv-modification',
  templateUrl: './cv-modification.component.html',
  styleUrls: ['./cv-modification.component.css']
})
export class CvModificationComponent implements OnInit {
  cvs: Cv[] = [];
  cv: Cv | null = null;

  constructor(
    private route: ActivatedRoute,
    private cvService: CvServiceService,
    private router: Router
  ) {}

  async ngOnInit() {
    await this.cvService.getcvs(); 
    this.cvs = this.cvService.cvs;
    const id = +this.route.snapshot.paramMap.get('id')!; 
    this.cv = this.cvs.find(cv => cv.id === id) || null;
  }

  

  deleteCv(): void {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id);
      this.router.navigate(['/cv_platforme']);
    }
  }
}
