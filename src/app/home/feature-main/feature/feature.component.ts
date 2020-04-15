import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { EnvironmentService } from "src/app/common-services/environment.service";
import { ArticlesService } from "src/app/services/articles.service";
import { Article } from "src/app/interfaces/article.model";
import { Pagination } from 'src/app/interfaces/pagination.model';

@Component({
  selector: "feature-post",
  templateUrl: "./feature.component.html",
})
export class FeatureComponent implements OnInit {
  articles: Article[];
  p: number = 1;

  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    private route: ActivatedRoute,
    private envService: EnvironmentService
  ) {}

  ngOnInit() {
    this.getArticlesFromFirstModule();
  }

  getArticlesFromFirstModule():void {
    this.articlesService
      .getArticlesFromFirstModule()
      .subscribe((response: Pagination) => {
        this.articles = response.data;
        console.log(this.articles);
      });
  }
}
