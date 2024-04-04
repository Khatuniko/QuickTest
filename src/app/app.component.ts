import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  constructor(private router: Router) {}

  isCalculatorRoute(): boolean {
    return this.router.url.includes('calculator');
  }

  isCorrectModelRoute(): boolean {
    return this.router.url.includes('correct-model');
  }

  isWrongModalRoute(): boolean {
    return this.router.url.includes('wrong-modal');
  }

  isModuleRoute():boolean {
    return this.router.url.includes('');
  }

  isAboutUsRoute(): boolean {
    return this.router.url.includes('about-us');
  }

  isCentersRoute() : boolean {
    return this.router.url.includes('service-centers');
  }
  isReservationRoute() : boolean {
    return this.router.url.includes('reservation');
  }

  isReglamentRoute() : boolean {
    return this.router.url.includes('regulation');
  }
  isReminderRoute() : boolean {
    return this.router.url.includes('remainder');
  }
  isNewsInnerRoute() : boolean {
    return this.router.url.includes('news-inner');
  }
  isNewsRoute(): boolean {
    return this.router.url.includes('news');
  }

  isPaymentRoute(): boolean {
    return this.router.url.includes('payment');
  }


}
