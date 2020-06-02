import { Component, OnInit } from "@angular/core";
import { Article } from "../../interfaces/article.model";
import { ActivatedRoute } from "@angular/router";
import { EnvironmentService } from "src/app/common-services/environment.service";

@Component({
  selector: "app-main-content",
  templateUrl: "./main-content.component.html",
  styleUrls: ["./main-content.component.css"],
})
export class MainContentComponent implements OnInit {
  articles: Article[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private envService: EnvironmentService
  ) {}

  ngOnInit() {
    this.activatedRoute.data.subscribe((data: { articles: Article }) => {
      this.articles = [ data.articles ];
    });
  }

}
