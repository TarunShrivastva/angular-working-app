import { Component, OnInit } from '@angular/core';
import { ArticlesService } from "../../services/articles.service";
import { Article } from "../../interfaces/article.model";
import { Router } from "@angular/router";
import { Pagination } from 'src/app/interfaces/pagination.model';
import { EnvironmentService } from 'src/app/common-services/environment.service';

@Component({
  selector: 'content-post',
  templateUrl: './content-post.component.html',
  styleUrls: ['./content-post.component.css']
})
export class ContentPostComponent implements OnInit {

  selectedArticle: Article;
  articles: Article[];
  p: number = 1;

  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    private envService: EnvironmentService
  ) { }

  ngOnInit() {
    console.log(history.state.data);
    const content_id = 1;
    this.getArticlesByContent(+content_id);
  }

  onSelect(article: Article): void {
    this.selectedArticle = article;
  }

  getArticlesByContent(content_id: number): void {
    this.articlesService
      .getArticlesByContent(content_id)
      .subscribe((response:Pagination) => {
        this.articles = response.data;
      });
  }

  pageChanged($event: any): void {
    console.log($event);
  }

}
