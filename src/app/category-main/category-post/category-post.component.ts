import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "../../services/articles.service";
import { Article } from "../../interfaces/article.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Pagination } from 'src/app/interfaces/pagination.model';
import { EnvironmentService } from 'src/app/common-services/environment.service';

@Component({
  selector: "category-post",
  templateUrl: "./category-post.component.html",
  styleUrls: ["./category-post.component.css"],
})
export class CategoryPostComponent implements OnInit {
  selectedArticle: Article;
  articles: Article[];
  p: number = 1;
  content:any;

  constructor(
    private articlesService: ArticlesService,
    private router: Router,
    private route: ActivatedRoute,
    private envService: EnvironmentService
  ) {}

  ngOnInit() {
    // this.content = this.route.snapshot.paramMap.get("category");
    this.content = this.route
      .data
      .subscribe(v => console.log(v));
    // this.getArticlesByContent(+content_id);
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
