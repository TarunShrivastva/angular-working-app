import { Component, OnInit } from "@angular/core";
import { EnvironmentService } from "../common-services/environment.service";
import { Article } from "../interfaces/article.model";
import { Pagination } from "../interfaces/pagination.model";
import { ArticlesService } from "../services/articles.service";
import { ActivatedRoute, Resolve } from "@angular/router";

@Component({
  selector: "popular-side-post",
  templateUrl: "./popular-side-post.component.html",
  styleUrls: ["./popular-side-post.component.css"],
})
export class PopularSidePostComponent implements OnInit, Resolve<any> {
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
    const content_type = this.activatedRoute.snapshot.paramMap.get("content");
    const category_type = this.activatedRoute.snapshot.paramMap.get("category");
    if (content_type !== null && category_type === null)
      this.categoryCheck = false;

    if (content_type !== null && category_type !== null)
      this.categoryCheck = true;

    return this.getArticlesByPopularFlag();
  }

  getArticlesByPopularFlag(): void {
    this.articlesService
      .getArticlesByPopularFlag()
      .subscribe((response: Pagination) => {
        this.articles = response.data;
      });
  }
}
