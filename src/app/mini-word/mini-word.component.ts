import { Component } from '@angular/core';

@Component({
  selector: 'app-mini-word',
  templateUrl: './mini-word.component.html',
  styleUrls: ['./mini-word.component.css']
})
export class MiniWordComponent {
  textColor: string = 'black'; // Couleur initiale
  fontSize: number = 16; // Taille initiale
  fontFamily: string = 'Arial'; // Police initiale
  fonts: string[] = ['Arial', 'Verdana', 'Times New Roman', 'Georgia', 'Courier New']; // Liste des polices
}
