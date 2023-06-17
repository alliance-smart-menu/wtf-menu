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
  positions: any[] | undefined

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
              this.filterPositins();
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

  changePosition() {
    if (this.positions && this.position) {
      const currentIndex = this.positions.findIndex((position: any) => position._id === this.position._id);
      let nextIndex = currentIndex + 1;
  
      if (nextIndex >= this.positions.length) {
        nextIndex = 0;
      }
  
      const newPosition = this.positions[nextIndex];
  
      if (newPosition) {
        this.router.navigate(['/position'], { queryParams: { _id: newPosition._id } });
        this.loading = true
        setTimeout(() => {
          this.ngOnInit();
        }, 300);
      }
    }
  }


  filterPositins() {
    if (this.menuService.positions && this.position) {

      this.positions = this.menuService.positions.filter( (position: any) => 
        position.sub_category == this.position.sub_category
      )

    }
  }

}
