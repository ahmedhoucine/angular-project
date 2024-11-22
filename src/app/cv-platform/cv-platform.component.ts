import { Component } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv-platform',
  templateUrl: './cv-platform.component.html',
  styleUrls: ['./cv-platform.component.css']
})
export class CvPlatformComponent {
  cvs: Cv[] = [
    {
      id: 1,
      name: 'Ahmed Houcine',
      profession: 'Web Developer',
      quote: 'Building the future one line of code at a time.',
      motto: 'Think. Build. Create.',
      jobDescription: 'Developing and maintaining web applications.',
      followers: 1200,
      following: 350,
      projects: 15,
      coverImage: 'assets/images/rotating_card_thumb2.png',
      profileImage: ''
    },
    /*rotating_card_profile2.png*/
    {
      id: 2,
      name: 'Sarah Ben Salah',
      profession: 'Data Scientist',
      quote: 'Data is the new oil.',
      motto: 'Analyze. Predict. Optimize.',
      jobDescription: 'Creating models to derive insights from data.',
      followers: 800,
      following: 220,
      projects: 10,
      coverImage: 'assets/images/rotating_card_thumb2.png',
      profileImage: 'assets/images/rotating_card_profile3.png'
    }
  ];
  selectedCv: Cv | null = null;

  onSelectCv(cv: Cv) {
    this.selectedCv = cv;
  }
  ngOnInit(){
   
    
  }
}
