import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvServiceService } from '../cv-service.service';
import { Cv } from '../model/cv.model';


@Component({
  selector: 'app-cv-modification',
  templateUrl: './cv-modification.component.html',
  styleUrls: ['./cv-modification.component.css']
})
export class CvModificationComponent {
  cv: Cv | null = null;

  constructor(
    private route: ActivatedRoute,
    private cvService: CvServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.cv = this.cvService.getCvById(id); // Ajoutez cette méthode dans CvService
  }

  deleteCv(): void {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id); // Ajoutez cette méthode dans CvService
      this.router.navigate(['/cv_platforme']);
    }
  }
}
