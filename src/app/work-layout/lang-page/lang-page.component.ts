import { Component, OnInit } from '@angular/core';

import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-lang-page',
  templateUrl: './lang-page.component.html',
  styleUrls: ['./lang-page.component.css']
})
export class LangPageComponent implements OnInit {

  constructor(
    public menuService: MenuService
  ) {}

  ngOnInit(): void {
  }

  selectedLanguage(lang: string) {
    if (lang === this.menuService.language) {
      return "selected"
    } else {
      return ""
    }
  }

  selectLanguage(lang: string) {
    this.menuService.language = lang
    localStorage.setItem("language", lang);
  }

}
