import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'QuickTestProject';
  // constructor(private translate: TranslateService){
  //   this.translate.setDefaultLang('ka');
  // }
  // switchLanguage(language:string){
  //   this.translate.use(language);
  // }
  // constructor(public translate: TranslateService) {
  //   translate.addLangs(['ka', 'en']);
  //   translate.setDefaultLang('ka');
  //   // const browerLang = translate.getBrowserLang();
  // }
  // switchLang(lang:string){
  //   this.translate.use(lang)
  // }

  // constructor(private translate:TranslateService){
  //   this.translate.setDefaultLang('en');
  // }

  // selectLanguage(event:any) {

  // }
}

