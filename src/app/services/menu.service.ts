import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http'
import {Observable} from 'rxjs'
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http: HttpClient) { }

  public token: string | undefined

  public sub_categories_loading: boolean = false
  public positions_loading: boolean = false

  public language: string = "md"
  public category: string = "64738c84699f77307907676d"
  public sub_category: string | undefined

  public sub_categories: any[] | undefined
  public positions: any[] | undefined


  setSub_Category() {
    if (this.sub_categories) {
      const candidate = this.sub_categories.find( (item) => item.category == this.category )
      if (candidate) {
        this.sub_category = candidate._id
      }
    }
  }
  
    // API запросы
    getMenu(): Observable<any> {
       
      let queryParams = new HttpParams();
  
      if (this.token) {
        queryParams = queryParams.append("token", this.token);
      } 
  
      return this.http.get<any>(`${environment.apiURL}/api/wtf/menu`)
    }

    getPosition(_id: string): Observable<any> {
      return this.http.get<any>(`${environment.apiURL}/api/wtf/position/${_id}`)
    }

}
