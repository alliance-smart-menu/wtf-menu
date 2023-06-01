import { Component, OnInit } from '@angular/core';

import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-position-page',
  templateUrl: './position-page.component.html',
  styleUrls: ['./position-page.component.css']
})
export class PositionPageComponent implements OnInit {

  html: any = {
    back: {
      ru: "Назад",
      md: "Înapoi",
      en: "Back"
    }
  }

  constructor(
    public menuService: MenuService
  ) {}

  ngOnInit(): void {
    
  }

}
