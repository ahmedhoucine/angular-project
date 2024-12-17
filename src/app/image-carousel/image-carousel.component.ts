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
  private intervalTime: number = 1000; 

  currentImage$: Observable<string> | undefined; 
  ngOnInit(): void {
    this.currentImage$ = interval(this.intervalTime).pipe(
      map(index => this.images[index % this.images.length]) 
    );
  }
}