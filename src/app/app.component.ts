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
    translate.addLangs(['GE', 'ENG']);
    translate.setDefaultLang('GE');
    const browerLang = translate.getBrowserLang();
  }
}


