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
  private fetched = false; 
  private fakeCvs: Cv[] = [
    new Cv(1, 'Sellaouti', 'Aymen', 12345678, 'Teacher', 'assets/images/as.jpg', 42),
    new Cv(2, 'Doe', 'John', 87654321, 'Engineer', 'assets/images/john.jpg', 35),
    new Cv(3, 'Smith', 'Anna', 56781234, 'Manager', 'assets/images/anna.jpg', 40),
  ];

  constructor(private http: HttpClient, private toastr: ToastrService) {}

  
  getcvs(){
    return this.cvs
  }

  fetchData(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiUrl}personnes`).subscribe(
        (response: any) => {
          this.cvs = response;
          this.fetched = true;
          this.toastr.success('CVs successfully fetched!', 'Success');
          resolve(); // Resolve the promise once data is fetched
        },
        (err: any) => {
          this.cvs = this.fakeCvs; // Fallback to fake data
          this.fetched = true;
          this.toastr.error('Erreur lors de la récupération des CVs depuis l’API', 'Error');
          resolve();
        },
        () => {
          console.log('Data transmission complete');
        }
      );
    });
  }
  

  getCvById(id: number): Cv | null {
    return this.cvs.find(cv => cv.id === id) || null;
  }

  deleteCv(id: number): void {
    this.cvs = this.cvs.filter((cv) => cv.id !== id);
  }
  
}
