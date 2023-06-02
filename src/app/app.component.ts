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
    this.checkSubCategory();
    this.getMenu();
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

  checkSubCategory() {
    const candidate = localStorage.getItem("sub_category");
    if (candidate) {
      this.menuService.sub_category = candidate
    }
  }

  getMenu() {
    this.menuService.sub_categories_loading = true
    this.menuService.positions_loading = true

    this.menuService.getMenu().subscribe(
      (data) => {
        this.menuService.sub_categories = data.sub_categories
        // Если есть массив и не выбрана субкатегория
        if (this.menuService.sub_categories && this.menuService.sub_categories.length !== 0 && !this.menuService.sub_category) {
          this.menuService.setSub_Category();
        }
        this.menuService.sub_categories_loading = false

        this.menuService.positions = data.positions
        this.menuService.positions_loading = false

      }
    )
  }

}
