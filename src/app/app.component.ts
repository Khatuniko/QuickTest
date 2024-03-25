import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

