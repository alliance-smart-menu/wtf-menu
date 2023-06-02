import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  public language: string = "md"
  public category: string = "64738c84699f77307907676d"
  public sub_category: string | undefined

  public sub_categories: any[] | undefined
  public positions: any[] | undefined

  public test: any[] = [
    {_id: 1, name: "Тест-1"},
    {_id: 2, name: "Тест-2"}
  ]

}
