import { Component } from '@angular/core';

@Component({
  selector: 'app-carte-visite',
  templateUrl: './carte-visite.component.html',
  styleUrls: ['./carte-visite.component.css']
})
export class CarteVisiteComponent {
  cardData = {
    name: 'John Marvel',
    profession: 'CEO',
    quote: `"I'm the new Sinatra, and since I made it here I can make it anywhere, yeah, they love me everywhere"`,
    motto: '"To be or not to be, this is my awesome motto!"',
    jobDescription: 'Web design, Adobe Photoshop, HTML5, CSS3, Corel and many others...',
    followers: 235,
    following: 114,
    projects: 35,
    profileImage: 'rotating_card_profile3.png',
    coverImage: 'assets/images/rotating_card_thumb2.png',
    socialLinks: {
      facebook: 'https://facebook.com',
      google: 'https://google.com',
      twitter: 'https://twitter.com'
    }
  };
}
