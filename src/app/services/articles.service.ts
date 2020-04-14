import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article.model';
import { Observable } from 'rxjs';
import { ApiService } from '../common-services/api.service';
import { Menu } from '../interfaces/menu.model';
import { Pagination } from  '../interfaces/pagination.model';

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  constructor(private api: ApiService) { }

  getArticles(): Observable<Article[]> {
    return this.api.get('get_menu_items');
  }

  getNavBarItems(): Observable<Menu>{
    return this.api.get('get_menu_items');
  }

  getArticlesByContentType(content_type:string): Observable<Pagination> {
    return this.api.get('articles/content/'+ content_type);
  }

  getArticlesByContentCategoryType(content_type:string, category_type:string ): Observable<Pagination> {
    return this.api.get('articles/content/'+ content_type +'/category/'+ category_type);
  }
}
