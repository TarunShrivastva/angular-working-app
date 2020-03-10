import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../interfaces/article.model';

@Component({
  selector: 'category-post',
  templateUrl: './category-post.component.html',
  styleUrls: ['./category-post.component.css']
})
export class CategoryPostComponent implements OnInit {

  selectedArticle: Article;

  articles: Article[];

  constructor(private ArticlesService: ArticlesService ) { }

  ngOnInit() {
    this.getArticles();
  }

  onSelect(article: Article): void {
    this.selectedArticle = article;
  }

  getArticles(): void {
    this.ArticlesService.getArticles()
        .subscribe(articles => this.articles = articles);
  }

}