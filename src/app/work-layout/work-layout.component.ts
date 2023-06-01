import { Component, OnInit } from '@angular/core';

import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-work-layout',
  templateUrl: './work-layout.component.html',
  styleUrls: ['./work-layout.component.css']
})
export class WorkLayoutComponent implements OnInit {

  html: any = {
    menu: {
      ru: "Меню",
      md: "Menu",
      en: "Menu"
    },
    contacts: {
      ru: "Контакты",
      md: "Contacte",
      en: "Contacts"
    },
    language: {
      ru: "Язык",
      md: "Limba",
      en: "Lang"
    }
  }

  constructor(
    public menuService: MenuService
  ) {}

  ngOnInit(): void {
  }

}
