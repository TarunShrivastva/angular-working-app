import { Component, OnInit } from "@angular/core"
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { TranslateService } from "@ngx-translate/core";
@Component({
    selector: "header-app",
    templateUrl: "./header.component.html"
})

export class HeaderComponent implements OnInit {
  filterParams: HttpParams = new HttpParams();
  menus: object;
  articles: any;

  constructor(
    protected router: Router,
    private articlesService: ArticlesService,
    public translate: TranslateService
  ) {
    translate.addLangs(["en", "hi"]);
    translate.setDefaultLang("en");
  }

  ngOnInit(): void {
    this.getNavBarItems();
  }

  getNavBarItems() {
    this.articlesService.getNavBarItems().subscribe((response) => {
      this.menus = response.memuItems;
    });
  }

  switchLang(lang: string) {
    this.translate.use(lang);
  }

}
