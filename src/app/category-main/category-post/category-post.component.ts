import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "../../services/articles.service";
import { Article } from "../../interfaces/article.model";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Pagination } from "src/app/interfaces/pagination.model";
import { EnvironmentService } from "src/app/common-services/environment.service";

@Component({
  selector: "category-post",
  templateUrl: "./category-post.component.html",
  styleUrls: ["./category-post.component.css"],
})
export class CategoryPostComponent implements OnInit {
  selectedArticle: Article;
  articles: Article[] = [];
  p: number = 1;

  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    private route: ActivatedRoute,
    private envService: EnvironmentService
  ) {
      const content_type = this.route.snapshot.paramMap.get("content");
      const category_type = this.route.snapshot.paramMap.get("category");
      this.getArticlesByContentCategoryType(content_type, category_type);
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if(val instanceof NavigationEnd){
        const content_type = this.route.snapshot.paramMap.get("content");
        const category_type = this.route.snapshot.paramMap.get("category");
        this.getArticlesByContentCategoryType(content_type, category_type);
      }
    });
  }

  getArticlesByContentCategoryType(
    content_type: string,
    category_type: string
  ): void {
    this.articlesService
      .getArticlesByContentCategoryType(content_type, category_type)
      .subscribe((response: Pagination) => {
        this.articles = response.data;
      });
  }

  pageChanged($event: any): void {
    console.log($event);
  }
}
