import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appRainbow]'
})
export class RainbowDirective {
  private colors: string[] = [
    'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'pink', 'cyan', 'lime'
  ];

  // HostBinding pour changer dynamiquement les styles
  @HostBinding('style.color') textColor: string = '';
  @HostBinding('style.borderColor') borderColor: string = '';

  constructor() {}

  // HostListener pour écouter l'événement keyup
  @HostListener('keyup') onKeyUp() {
    const randomColor = this.getRandomColor();
    this.textColor = randomColor; // Change la couleur du texte
    this.borderColor = randomColor; // Change la couleur de la bordure
  }

  // Méthode pour obtenir une couleur aléatoire
  private getRandomColor(): string {
    const randomIndex = Math.floor(Math.random() * this.colors.length);
    return this.colors[randomIndex];
  }
}
