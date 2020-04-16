import { Component, OnInit } from "@angular/core";
import { ArticlesService } from "../../services/articles.service";
import { Article } from "../../interfaces/article.model";
import { Router, ActivatedRoute, NavigationEnd } from "@angular/router";
import { EnvironmentService } from "src/app/common-services/environment.service";
import { Pagination } from 'src/app/interfaces/pagination.model';

@Component({
  selector: "content-post",
  templateUrl: "./content-post.component.html",
  styleUrls: ["./content-post.component.css"],
})
export class ContentPostComponent implements OnInit {
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
