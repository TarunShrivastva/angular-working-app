import { Component, OnInit } from "@angular/core";
import { EnvironmentService } from "../common-services/environment.service";
import { Article } from "../interfaces/article.model";
import { Pagination } from "../interfaces/pagination.model";
import { ArticlesService } from "../services/articles.service";
import { ActivatedRoute, Resolve } from "@angular/router";

@Component({
  selector: "latest-side-post",
  templateUrl: "./latest-side-post.component.html",
  styleUrls: ["./latest-side-post.component.css"],
})
export class LatestSidePostComponent implements OnInit, Resolve<any> {
  articles: Article[];
  categoryCheck: boolean = true;

  constructor(
    private envService: EnvironmentService,
    private articlesService: ArticlesService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.resolve();
  }

  resolve() {
    const category_type = this.activatedRoute.snapshot.paramMap.get("category");
    if (category_type !== null) this.categoryCheck = false;
    return this.getArticlesByPublishedFlag();
  }

  getArticlesByPublishedFlag(): void {
    this.articlesService
      .getArticlesByPublishedFlag()
      .subscribe((response: Pagination) => {
        this.articles = response.data;
      });
  }
}
