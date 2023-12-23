import { Component } from '@angular/core';
import { TranslateService } from "@ngx-translate/core";
import { Router } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  // constructor(private translate: TranslateService){
  //   this.translate.setDefaultLang('ka');
  // }
  // switchLanguage(language:string){
  //   this.translate.use(language);
  // }
  // constructor(public translate: TranslateService, private route:Router) {
  //   translate.addLangs(['ge', 'en']);
  //   translate.setDefaultLang('ge');
  //   const browerLang = translate.getBrowserLang();
  // }

  // constructor(public translate: TranslateService) {
  //   translate.addLangs(['ka', 'en']);
  //   translate.setDefaultLang('ka');
  //   // const browerLang = translate.getBrowserLang();
  // }
  // switchLang(lang:string){
  //   this.translate.use(lang)
  // }

  constructor(private translate:TranslateService){
    this.translate.setDefaultLang('en');
  }

  selectLanguage(event:any) {
    this.translate.use(event.target.value);

  }
  
  }



