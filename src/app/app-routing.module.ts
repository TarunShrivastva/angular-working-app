import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CategoryMainComponent } from './category-main/category-main.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ContentMainComponent } from './content-main/content-main.component';
import { ArticleResolverService } from './services/article-resolver.service';
import { ArticleComponent } from './article/article.component';
import { MainArticleResolverService } from './services/main-article-resolver.service';

const routes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "about",
    component: AboutComponent
  },
  {
    path: "contact",
    component: ContactComponent
  },
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
  exports: [RouterModule]
})
export class AppRoutingModule {}
