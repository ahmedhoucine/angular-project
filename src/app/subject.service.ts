import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Cv } from './model/cv.model';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  private cvSelectedSubject = new Subject<Cv>();
  cvSelected$ = this.cvSelectedSubject.asObservable();

  selectCv(cv: Cv) {
    this.cvSelectedSubject.next(cv);
  }
}
