import { Component } from '@angular/core';
// import { TranslateService } from '@ngx-translate/core';
// import { Router } from '@angular/router';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  borderRadius: string = '8px'; // Initial border-radius value

  toggleBorderRadius() {
    this.borderRadius = this.borderRadius === '8px' ? '0px' : '8px'; // Toggle between 8px and 0px
  }

  // constructor(private translate: TranslateService, private route:Router) {
  //   translate.setDefaultLang('geo'); 
  // }

  // switchLanguage(lang: 'geo' | 'en'){
  //   this.translate.use(lang);
  // }
  
  // selectedOption: string = 'Geo';
  // isDropdownOpen: boolean = false;

  // toggleDropdown(open: boolean) {
  //   this.isDropdownOpen = open;
  // }

  // selectOption(option: string) {
  //   this.selectedOption = option;
  //   this.isDropdownOpen = false;
  // }
}