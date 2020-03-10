import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article.model';
import { Articles } from '../interfaces/mock-articles';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  constructor() { }

  getArticles(): Observable<Article[]> {
    return of(Articles);
  }
}
