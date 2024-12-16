import { Component, Input, OnInit } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-image-carousel',
  templateUrl: './image-carousel.component.html',
  styleUrls: ['./image-carousel.component.css']
})
export class ImageCarouselComponent implements OnInit {
  private images: string[] = [
    'assets/images/rotating_card_profile2.png',
    'assets/images/rotating_card_profile.png',
    'assets/images/rotating_card_profile3.png'
  ];
  private intervalTime: number = 2000; 
  private size: string = '400px'; 

  currentImage$: Observable<string> | undefined; // Observable for the current image

  ngOnInit(): void {
    // Create an observable that cycles through the images
    this.currentImage$ = interval(this.intervalTime).pipe(
      map(index => this.images[index % this.images.length]) // Loop through the images
    );
  }
}