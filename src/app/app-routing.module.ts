import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CategoryMainComponent } from "./category-main/category-main.component";
import { ContentMainComponent } from "./content-main/content-main.component";
import { ArticleComponent } from "./article/article.component";
import { ArticleResolverService } from './services/article-resolver.service';
import { MainArticleResolverService } from './services/main-article-resolver.service';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: ":content",
    component: ContentMainComponent,
    resolve: { articles: ArticleResolverService }
  },
  {
    path: ":content/:category",
    component: CategoryMainComponent,
    resolve: { articles: ArticleResolverService }
  },
  {
    path: ":content/:category/:sluged_title",
    component: ArticleComponent,
    resolve: { articles: MainArticleResolverService }
  },
  {
    path: "",
    redirectTo: "/",
    pathMatch: "full",
  },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
