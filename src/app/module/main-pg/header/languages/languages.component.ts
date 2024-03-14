import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  selectedOption: string = 'Geo';
  isDropdownOpen: boolean = false;

  constructor(private translate: TranslateService, private route:Router) {
    translate.setDefaultLang('geo'); 
  }

  switchLanguage(lang: 'geo' | 'en'){
    this.translate.use(lang);
  }

  toggleDropdown(open: boolean) {
    this.isDropdownOpen = open;
  }
  
  selectOption(option: string) {
    this.selectedOption = option;
    this.isDropdownOpen = false;
  }
}






