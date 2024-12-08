import { Injectable } from '@angular/core';
import { Cv } from './model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheServiceService {

  private embauches: Cv[] = [];

  getEmbauches(): Cv[] {
    return this.embauches;
  }

  addEmbauche(cv: Cv): void {
    this.embauches.push(cv);
  }
}
