import {Component, Type} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AboutPage} from '../about-page/about-page';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html'
})
export class HomePage {
  about: Type = AboutPage;

  constructor(private _navController: NavController) {}
}
