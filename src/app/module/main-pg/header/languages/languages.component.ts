import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {

  constructor(public translate: TranslateService) {
    translate.addLangs(['ge', 'eng']);
    translate.setDefaultLang('ge');
    const browerLang = translate.getBrowserLang();
  }

  // isListVisible = false;

  // toggleList(): void {
  //   this.isListVisible = !this.isListVisible;
  // }

  



}





