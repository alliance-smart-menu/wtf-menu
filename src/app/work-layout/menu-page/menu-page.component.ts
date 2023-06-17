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
    },
    cost: {
      ru: "Лей",
      md: "Lei",
      en: "MDL"
    }
  }

  constructor(
    public menuService: MenuService
  ) {}

  ngOnInit(): void {

  }

  classDiscription(position: any) {
    if (position.description && position.description[this.menuService.language]) {
      return "gramm"
    } else {
      return "without-discription"
    }
  }

  setCategory(_id: string) {
    this.menuService.category = _id
    localStorage.setItem("category", _id)
    this.menuService.setSub_Category();
    this.setSubCategory();
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Optional: Adds smooth scrolling animation
    });
  }

  setSubCategory() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    if (this.menuService.sub_category) {
      localStorage.setItem("sub_category", this.menuService.sub_category)
    }
  }

  selectedCategory(_id: string) {
    if (this.menuService.category == _id) {
      return "category-name active"
    } else {
      return "category-name"
    }
  }

}
