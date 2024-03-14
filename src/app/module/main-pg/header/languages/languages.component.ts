import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {


  constructor(public translate: TranslateService, private route:Router) {
    translate.addLangs(['geo', 'en']);
    translate.setDefaultLang('geo');
    const browerLang = translate.getBrowserLang();
  }

}






