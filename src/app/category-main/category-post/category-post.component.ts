import { Component, OnInit } from "@angular/core";
import { Article } from "../../interfaces/article.model";
import { ActivatedRoute } from "@angular/router";
import { Pagination } from "src/app/interfaces/pagination.model";
import { EnvironmentService } from "src/app/common-services/environment.service";

@Component({
  selector: "category-post",
  templateUrl: "./category-post.component.html",
  styleUrls: ["./category-post.component.css"],
})
export class CategoryPostComponent implements OnInit {
  articles: Article[] = [];
  p: number = 1;

  constructor(
    private activatedRoute: ActivatedRoute,
    private envService: EnvironmentService
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { articles: Pagination }) => {
      this.articles = data.articles.data;
    });
  }

  pageChanged($event: any): void {
    console.log($event);
  }
}
