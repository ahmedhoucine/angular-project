import { Injectable } from '@angular/core';
import { Cv } from './model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {
  private cvs: Cv[] = [
    new Cv(1, 'Ahmed Houcine', 'Web Developer', 'Building the future...', 'Think. Build. Create.', 'Developing...', 1200, 350, 15, 'assets/images/rotating_card_thumb2.png', ''),
    new Cv(2, 'Sarah Ben Salah', 'Data Scientist', 'Data is the new oil.', 'Analyze. Predict. Optimize.', 'Creating models...', 800, 220, 10, 'assets/images/rotating_card_thumb2.png', 'assets/images/rotating_card_profile3.png')
  ];

  getCvs(): Cv[] {
    return this.cvs;
  }

  getCvById(id: number): Cv | null {
    return this.cvs.find(cv => cv.id === id) || null;
  }

  deleteCv(id: number): void {
    this.cvs = this.cvs.filter(cv => cv.id !== id);
  }
}
