import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-color-display',
  templateUrl: './color-display.component.html',
  styleUrls: ['./color-display.component.css']
})
export class ColorDisplayComponent {
  @Input() backgroundColor: string = 'transparent'; // Couleur reçue du parent
  @Output() favoriteColorChange = new EventEmitter<string>(); // Événement pour notifier le parent

  myFavoriteColor: string = 'blue'; // Couleur favorite par défaut du fils

  // Méthode appelée lorsqu'on clique sur le bouton
  setParentBackgroundToFavorite() {
    this.favoriteColorChange.emit(this.myFavoriteColor);
  }
}
