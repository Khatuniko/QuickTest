import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'QuickTestProject';

  // constructor(public translate: TranslateService) {
  //   translate.addLangs(['geo', 'en']);
  //   translate.setDefaultLang('geo');
  //   const browerLang = translate.getBrowserLang();
  // }

}

