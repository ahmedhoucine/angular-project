import { Component } from '@angular/core';

@Component({
  selector: 'app-color-changer',
  templateUrl: './color-changer.component.html',
  styleUrls: ['./color-changer.component.css']
})
export class ColorChangerComponent {
  defaultColor: string = 'white'; // Couleur par défaut du div
  currentColor: string = this.defaultColor;
  inputValue: string = ''; // Contient la valeur de l'input

  // Met à jour la couleur en fonction de l'entrée utilisateur
  changeColor(color: string) {
    this.currentColor = color;
  }

  // Réinitialise la couleur et vide l'input
  resetColor(colorInput: HTMLInputElement) {
    this.currentColor = this.defaultColor;
    this.inputValue = ''; // Efface la valeur liée à ngModel
    colorInput.value = ''; // Nettoie l'input HTML (au cas où)
  }

}
