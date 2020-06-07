import { Component, OnInit } from "@angular/core"
import { HttpParams } from '@angular/common/http';
import { Router } from '@angular/router';
import { ArticlesService } from '../services/articles.service';
import { TranslateService } from "@ngx-translate/core";
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
    selector: "header-app",
    templateUrl: "./header.component.html",
    styles: [`
    .show {
      display: block;
    },
    .hide {
      display: none;
    }`]
})

export class HeaderComponent implements OnInit {
  filterParams: HttpParams = new HttpParams();
  menus: object;
  articles: any;
  status: boolean[] = [false, false];

  constructor(
    protected router: Router,
    private articlesService: ArticlesService,
    public translate: TranslateService,
    private deviceService: DeviceDetectorService
  ) {
    translate.addLangs(["en", "hi"]);
    translate.setDefaultLang("en");

    const isMobile = this.deviceService.isMobile();
    const isTablet = this.deviceService.isTablet();
    console.log(isMobile, isTablet);
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

  clickEvent(value:number){

    // this.status[0] = !this.status[0];
    // this.status[1] = !this.status[1];
  }
}
