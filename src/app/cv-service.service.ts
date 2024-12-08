import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Cv } from './model/cv.model';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CvServiceService {
  private apiUrl = 'https://apilb.tridevs.net/api/'; // Base URL for API
  public cvs: Cv[] = []; // Array that will store the CVs (either fetched from API or using fallback)

  private fakeCvs: Cv[] = [
    new Cv(1, 'Ahmed Houcine', 'Web Developer', 'Building the future one line of code at a time.', 'Think. Build. Create.', 'Developing and maintaining web applications.', 1200, 350, 15, 'assets/images/rotating_card_thumb2.png', ''),
    new Cv(2, 'Sarah Ben Salah', 'Data Scientist', 'Data is the new oil.', 'Analyze. Predict. Optimize.', 'Creating models to derive insights from data.', 800, 220, 10, 'assets/images/rotating_card_thumb2.png', 'assets/images/rotating_card_profile3.png'),
    new Cv(3, 'John Doe', 'Designer', 'Design is life.', 'Create. Inspire.', 'Designing intuitive user experiences.', 500, 300, 8, 'assets/images/rotating_card_thumb2.png', ''),
  ];

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  /**
   * Fetch CVs from the API. If the request fails, load fake CVs instead.
   */
  fetchCVs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(`${this.apiUrl}personnes`).pipe(
      catchError((error) => {
        console.error('Erreur lors de la récupération des CVs depuis l’API', error);
        this.toastr.error('Erreur lors de la récupération des CVs depuis l’API');
        this.cvs = this.fakeCvs; // Use fake CVs on failure
        console.log(this.cvs)
        return of(this.cvs);
      })
    );
  }

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

 