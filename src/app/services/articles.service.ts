import { Injectable } from '@angular/core';
import { Article } from '../interfaces/article.model';
import { Articles } from '../interfaces/mock-articles';

@Injectable({
  providedIn: 'root'
})

export class ArticlesService {

  constructor() { }

  getArticles(): Article[] {
    return Articles;
  }
}
