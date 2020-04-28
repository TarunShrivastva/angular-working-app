import { Component, OnInit } from "@angular/core";
import { GlobalService } from "./services/global.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  data: object[] = [
    { name: "keywords", content: "Angular SEO Integration, Music CRUD, Angular Universal" },
    { name: "og:site_name", content: "https://www.abc.com/", itemprop: "sourceOrganization" },
    { name: "og:type", content: "article", itemprop: "sourceOrganization" },
    { name: "og:title", content: "test-article", itemprop: "headline" },
    { name: "og:description", content: "test-article", itemprop: "headline"},
    { name: "og:url", content: "test/article/1", itemprop: "url" },
    { name: "robots", content: "index, follow" },
    { name: "author", content: "Digamber Singh" },
    { name: "viewport", content: "width=device-width, initial-scale=1" },
    { name: "date", content: "2019-10-31", scheme: "YYYY-MM-DD" }
    // { charset: "UTF-8" }
  ];

  constructor(private globalService: GlobalService) {}

  ngOnInit() {
    this.setMetaTags(this.data);
  }

  setMetaTags(data: object[]): void {
    this.globalService.setMetaTags("heros", data);
  }
}
