import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testing',
  templateUrl: './testing.component.html',
  styleUrls: ['./testing.component.scss']
})
export class TestingComponent {

  constructor(private router: Router) {}
  // navigateToFirst() {
  //   this.router.navigate(['contacts']);
  // }

  // public isShow: boolean = false;
  // onBurgerShow() {
  //   this.isShow = !this.isShow;
  //   console.log(this.isShow);
  // }


  // isMenuOpen = false;

  // toggleMenu(): void {
  //   this.isMenuOpen = !this.isMenuOpen;
  // }

  // start 01.04

  // constructor(){}

  menuVariable:boolean = false;
  menu_icon_variable:boolean = false;

  openMenu() {
    this.menuVariable =!  this.menuVariable;
    this.menu_icon_variable =! this.menu_icon_variable;
  }

}
