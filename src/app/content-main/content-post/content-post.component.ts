import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "../../services/articles.service";
import { Article } from "../../interfaces/article.model";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Pagination } from "src/app/interfaces/pagination.model";
import { EnvironmentService } from "src/app/common-services/environment.service";

@Component({
  selector: "content-post",
  templateUrl: "./content-post.component.html",
  styleUrls: ["./content-post.component.css"],
})
export class ContentPostComponent implements OnInit {
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
    this.getArticlesByContentType(content_type);
  }

  ngOnInit() {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        const content_type = this.route.snapshot.paramMap.get("content");
        this.getArticlesByContentType(content_type);
      }
    });
  }

  getArticlesByContentType(content_type: string): void {
    this.articlesService
      .getArticlesByContentType(content_type)
      .subscribe((response: Pagination) => {
        this.articles = response.data;
      });
  }

  pageChanged($event: any): void {
    console.log($event);
  }
}
