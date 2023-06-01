import { Component, OnInit } from '@angular/core';

import { MenuService } from './services/menu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    public menuService: MenuService
  ) {}

  ngOnInit(): void {
    this.checkLanguage();
    this.checkCategory();
  }

  checkLanguage() {
    const candidate = localStorage.getItem("language");
    if (candidate) {
      this.menuService.language = candidate
    }
  }

  checkCategory() {
    const candidate = localStorage.getItem("category");
    if (candidate) {
      this.menuService.category = candidate
    }
  }

}
