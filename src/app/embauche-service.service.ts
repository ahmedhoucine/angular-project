import { Injectable } from '@angular/core';
import { Cv } from './model/cv.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheServiceService {
  private embauches: Cv[] = [];

  constructor(private toastr: ToastrService) {}

  getEmbauches(): Cv[] {
    return this.embauches;
  }

  addEmbauche(cv: Cv): void {
    const isAlreadyEmbauched = this.embauches.some(embauche => embauche.id === cv.id);
    if (isAlreadyEmbauched) {
      this.toastr.error('Ce CV est déjà dans la liste des embauchés.', 'Erreur');
      return;
    }
    this.embauches.push(cv);
    this.toastr.success(`${cv.name} a été embauché avec succès !`, 'Succès');
  }
}
