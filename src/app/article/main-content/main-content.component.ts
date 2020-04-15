import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "src/app/services/articles.service";
import { Article } from "../../interfaces/article.model";
import { Router, ActivatedRoute } from "@angular/router";
import { EnvironmentService } from "src/app/common-services/environment.service";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.css"],
})
export class MainContentComponent implements OnInit {
  article_id: number;
  articles: Article[];

  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    private route: ActivatedRoute,
    private envService: EnvironmentService
  ) {
    const sluged_title = this.route.snapshot.paramMap.get("sluged_title");
    const titleArray = sluged_title.split("-");
    const titleArrayLength = sluged_title.split("-").length;
    this.article_id = +titleArray[titleArrayLength - 1];
  }

  ngOnInit() {
    this.getArticleById(this.article_id);
  }

  getArticleById(id: number): void {
    this.articlesService.getArticlesById(id).subscribe((response: Article) => {
      this.articles = [response];
    });
  }
}
