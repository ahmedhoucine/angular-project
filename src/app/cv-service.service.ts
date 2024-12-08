import { Injectable } from '@angular/core';
import { Cv } from './model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class CvServiceService {

  private cvs: Cv[] = [
    new Cv(
      1,
      'Ahmed Houcine',
      'Web Developer',
      'Building the future one line of code at a time.',
      'Think. Build. Create.',
      'Developing and maintaining web applications.',
      1200,
      350,
      15,
      'assets/images/rotating_card_thumb2.png',
      'assets/images/rotating_card_profile2.png'
    ),
    new Cv(
      2,
      'Sarah Ben Salah',
      'Data Scientist',
      'Data is the new oil.',
      'Analyze. Predict. Optimize.',
      'Creating models to derive insights from data.',
      800,
      220,
      10,
      'assets/images/rotating_card_thumb2.png',
      'assets/images/rotating_card_profile3.png'
    )
  ];

  getCvs(): Cv[] {
    return this.cvs;
  }
}
