import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(private router: Router) {}
  
  menuVariable:boolean = false;
  menu_icon_variable:boolean = false;

  openMenu() {
    this.menuVariable = !this.menuVariable;
    this.menu_icon_variable = !this.menu_icon_variable;

    const bodyElement = document.body;
    if (bodyElement) {
      bodyElement.classList.toggle('noScroll');
    }
  }
}
