import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Cv } from './model/cv.model';

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

  
  getcvs(){
    return this.cvs
  }

  fetchData(): Promise<void> {
    return new Promise((resolve, reject) => {
      this.http.get(`${this.apiUrl}personnes`).subscribe(
        (response: any) => {
          this.cvs = response;
          this.toastr.success('CVs successfully fetched!', 'Success');
          resolve(); 
        },
        (err: any) => {
          this.cvs = this.fakeCvs; 
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
