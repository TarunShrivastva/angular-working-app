import { Component, OnInit } from "@angular/core";
import { HttpParams } from "@angular/common/http";
import { Router } from "@angular/router";
import { ArticlesService } from "../services/articles.service";

@Component({
  selector: "header-app",
  templateUrl: "./header.component.html",
})
export class HeaderComponent implements OnInit {
  filterParams: HttpParams = new HttpParams();
  menus: object;
  articles: any;

  constructor(
    protected router: Router,
    private articlesService: ArticlesService
  ) {}
  ngOnInit(): void {
    this.getNavBarItems();
    const content_id = 1;
    this.getArticlesByContent(+content_id);
  }

  getNavBarItems(): void {
    this.articlesService.getNavBarItems().subscribe((response) => {
      this.menus = response.memuItems;
    });
  }

  getArticlesByContent(content_id:number): void {
    this.articlesService.getArticlesByContent(content_id).subscribe((response) => {
      this.articles = response.data;
      console.log(this.articles);
    });
  }
}
