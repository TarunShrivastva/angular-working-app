import { Injectable } from "@angular/core";
import { ArticlesService } from "./articles.service";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from "@angular/router";
import { catchError } from "rxjs/operators";
import { empty, Observable } from "rxjs";
import { Article } from "../interfaces/article.model";

@Injectable({
  providedIn: "root",
})
export class MainArticleResolverService
  implements Resolve<Observable<Article>> {
  constructor(private articlesService: ArticlesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const sluged_title = route.paramMap.get("sluged_title");
    const titleArray = sluged_title.split("-");
    const titleArrayLength = sluged_title.split("-").length;
    const article_id = +titleArray[titleArrayLength - 1];

    if (article_id !== null) {
      return this.articlesService.getArticlesById(article_id);
    }
  }
}
