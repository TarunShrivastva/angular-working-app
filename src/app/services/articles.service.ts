import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article.model';
import { Observable } from 'rxjs';
import { ApiService } from '../common-services/api.service';
import { Menu } from '../interfaces/menu.model';


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

  getArticlesByContent(content_id): Observable<any[]> {
    return this.api.get('articles/content/'+ content_id);
  }
}
