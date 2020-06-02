import { Injectable } from "@angular/core";
import {
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Resolve,
} from "@angular/router";
import { Observable } from "rxjs";
import { ArticlesService } from "./articles.service";
import { Pagination } from "../interfaces/pagination.model";

@Injectable({
  providedIn: "root",
})
export class ArticleResolverService implements Resolve<Observable<Pagination>> {
  constructor(private articlesService: ArticlesService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const content_type = route.paramMap.get("content");
    const category_type = route.paramMap.get("category");

    if (content_type !== null && category_type !== null) {
      return this.articlesService.getArticlesByContentCategoryType(content_type, category_type);
    }

    if (content_type !== null) {
      return this.articlesService.getArticlesByContentType(content_type);
    }
  }
}
