import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  

  // constructor(public translate: TranslateService, private route:Router) {
  //   translate.addLangs(['geo', 'en']);
  //   translate.setDefaultLang('geo');
  //   const browerLang = translate.getBrowserLang();
  // }

  // switchLanguage(language:string){
  //   this.translate.use(language);
    
  // }
  
  // selectedOption: string = 'Geo';
  // isDropdownOpen: boolean = false;

  // toggleDropdown(open: boolean) {
  //   this.isDropdownOpen = open;
  // }

  // toggleOptions() {
  //   if (this.selectedOption === 'ENG') {
  //     this.selectedOption = 'Geo';
  //   } else {
  //     this.selectedOption = 'ENG';
  //   }
  //   this.isDropdownOpen = false;
  // }

  // isEngOptionVisible(): boolean {
  //   return this.selectedOption !== 'ENG';
  // }

  // isGeoOptionVisible(): boolean {
  //   return this.selectedOption !== 'Geo';
  // }

  // selectOption(option: string) {
  //   this.selectedOption = option;
  //   this.isDropdownOpen = false;
  // }

  // trackByLang(index: number, lang: string): string {
  //   return lang; // Or return a unique identifier if available
  // }
}

