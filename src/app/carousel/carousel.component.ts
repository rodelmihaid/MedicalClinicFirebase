import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  items = [];
  currentIndex = 0;
  constructor() {
    this.items = [
      {
        text: 'Programul locatiilor Licență in data de 19 iulie 2023',
        subtext: '',
        image: '/assets/slide1.png',
      },
      {
        text: '50% discount in primele 6 luni de abonament',
        subtext:
          'Ajută-ți angajații sa prevină afecțiuni ce pot deveni costisitoare pentru corp și buzunare. Oferta este disponibilă până pe 19 iulie. ',
        image: '/assets/slide2.png',
      },
      {
        text: '20% reducere la abonamentele individuale',
        subtext:
          'Când vrei să economisești, #peabonament previi afecțiuni ce pot deveni costisitoare pentru corp și buzunare.',
        image: '/assets/slide3.png',
      },
      {
        text: 'Poti vedea cu precizia unei raze X',
        subtext: 'Medicina extraordinara iti da puteri extraordinare',
        image: 'assets/slide4.png',
      },
      {
        text: 'Campionii aleg echipa performanta',
        subtext:
          'Investigatia RMN e cea mai sesibila si neinvaziva metoda de evaluare si diagnosticare a unui spectru larg de boli care afecteaza sistemul musculo-scheletic',
        image: 'assets/slide5.png',
      },
    ];
  }

  ngOnInit() {}
}
