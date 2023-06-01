import { Component, OnInit } from '@angular/core';

import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.css']
})
export class MenuPageComponent implements OnInit {

  html: any = {
    bar: {
      ru: "Бар",
      md: "Bar",
      en: "Bar"
    },
    kitchen: {
      ru: "Кухня",
      md: "Bucătărie",
      en: "Kitchen"
    }
  }

  constructor(
    public menuService: MenuService
  ) {}

  ngOnInit(): void {
    
  }

  setCategory(_id: string) {
    this.menuService.category = _id
    localStorage.setItem("category", _id)
  }

  selectedCategory(_id: string) {
    if (this.menuService.category == _id) {
      return "category-name active"
    } else {
      return "category-name"
    }
  }

}
