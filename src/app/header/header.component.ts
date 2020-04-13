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
  }

  getNavBarItems(): void {
    this.articlesService.getNavBarItems().subscribe((response) => {
      this.menus = response.memuItems;
    });
  }
}
