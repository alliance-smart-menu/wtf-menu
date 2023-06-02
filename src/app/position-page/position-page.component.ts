import { Component, OnInit } from '@angular/core';

import { MenuService } from '../services/menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-position-page',
  templateUrl: './position-page.component.html',
  styleUrls: ['./position-page.component.css']
})
export class PositionPageComponent implements OnInit {

  loading: boolean = false

  html: any = {
    back: {
      ru: "Назад",
      md: "Înapoi",
      en: "Back"
    },
    cost: {
      ru: "Лей",
      md: "Lei",
      en: "MDL"
    }
  }

  position: any

  constructor(
    public menuService: MenuService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.findPosition();
  }

  findPosition() {
    this.loading = true

    const _id = this.route.snapshot.queryParamMap.get('_id');

    if (_id) {
      this.menuService.getPosition(_id).subscribe(
        data => {
            if (data) {
              this.position = data
              this.loading = false
            } else {
              this.router.navigate(['/menu'])
            }
        },
        error => {
          this.router.navigate(['/menu'])
        }
      )
    } else {
      this.router.navigate(['/menu'])
    }


  }

}
