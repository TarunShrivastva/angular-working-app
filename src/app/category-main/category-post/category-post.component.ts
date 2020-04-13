import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../services/articles.service';
import { Article } from '../../interfaces/article.model';
import { Router } from "@angular/router";

@Component({
  selector: 'category-post',
  templateUrl: './category-post.component.html',
  styleUrls: ['./category-post.component.css']
})
export class CategoryPostComponent implements OnInit {

  selectedArticle: Article;

  articles: Article[];

  constructor(private articlesService: ArticlesService, private router:Router ) { }

  ngOnInit() {
    const content_id = 1;
    this.getArticlesByContent(+content_id);
  }

  onSelect(article: Article): void {
    this.selectedArticle = article;
  }

  getArticlesByContent(content_id:number): void {
    this.articlesService.getArticlesByContent(content_id).subscribe((response) => {
      this.articles = response.data;
      console.log(this.articles);
    });
  }

}
