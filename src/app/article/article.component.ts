import { Component, OnInit } from "@angular/core";
import { Article } from "../interfaces/article.model";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { Pagination } from "src/app/interfaces/pagination.model";
import { EnvironmentService } from "src/app/common-services/environment.service";
import { ArticlesService } from "../services/articles.service";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.css"],
})
export class ArticleComponent implements OnInit {
  article: Article;

  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    private route: ActivatedRoute,
    private envService: EnvironmentService
  ) {}

  ngOnInit() {}
}
