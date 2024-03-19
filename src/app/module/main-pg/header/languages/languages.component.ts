import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  selectedOption: string = 'Geo';

  constructor(private translate: TranslateService, private route: Router) {
    translate.setDefaultLang('geo');
  }

  switchLanguage(lang: 'geo' | 'en') {
    this.translate.use(lang);
    this.selectedOption = lang === 'geo' ? 'Geo' : 'ENG';
  }

  toggleLanguage() {
    this.selectedOption = this.selectedOption === 'Geo' ? 'ENG' : 'Geo';
    this.switchLanguage(this.selectedOption === 'Geo' ? 'geo' : 'en');
  }


}