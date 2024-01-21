import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  title = 'QuickTestProject';

  constructor(public translate: TranslateService) {
    translate.addLangs(['ge', 'en']);
    translate.setDefaultLang('ge');
    const browerLang = translate.getBrowserLang();
  }
}










