import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-welcome-page',
  templateUrl: './welcome-page.component.html',
  styleUrls: ['./welcome-page.component.css']
})
export class WelcomePageComponent implements OnInit {

  html: any = {
    welcome: {
      ru: "Добро пожаловать!",
      md: "Bine ați venit!",
      en: "Welcome!"
    },
    select: {
      ru: "Выберите язык!",
      md: "Selectați limba!",
      en: "Select a language!"
    }
  }

  @HostListener('window:resize', ['$event'])
  OnChangeHeight(){
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  constructor(
    public menuService: MenuService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.windowHeigth();
  }

  selectLanguage(lang: string) {
    this.menuService.language = lang
    localStorage.setItem("language", lang);
    this.router.navigate(['/menu'])
  }

  windowHeigth() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }


}
