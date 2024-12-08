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
  private apiUrl = 'https://apilb.tridevs.net/api/';
  public cvs: Cv[] = []; 

  private fakeCvs: Cv[] = [
    new Cv(1, 'Sellaouti', 'Aymen', 12345678, 'Teacher', 'assets/images/as.jpg', 42),
    new Cv(2, 'Doe', 'John', 87654321, 'Engineer', 'assets/images/john.jpg', 35),
    new Cv(3, 'Smith', 'Anna', 56781234, 'Manager', 'assets/images/anna.jpg', 40),
  ];

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  fetchCVs(): Observable<Cv[]> {
    return this.http.get<Cv[]>(`${this.apiUrl}personnes`).pipe(
      catchError((error) => {
        console.error('Error fetching CVs from API:', error);
        this.toastr.error('Erreur lors de la récupération des CVs depuis l’API');
        this.cvs = this.fakeCvs; // Set the fake CVs in case of failure
        console.log('Using fake CVs as fallback:', this.cvs);
        return of(this.cvs); // Return observable of fake CVs
      })
    );
  }

  
  

  getCvById(id: number): Cv | null {
    console.log('Looking for CV with ID:', id);
    console.log('Available CVs:', this.cvs);
    return this.cvs.find(cv => cv.cin === id) || null;
  }

  deleteCv(id: number): void {
    console.log('Deleting CV with ID:', id);
    this.cvs = this.cvs.filter(cv => cv.cin !== id);
    console.log('Updated CVs list after deletion:', this.cvs);
  }
}
