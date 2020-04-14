import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from "ngx-pagination";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { AdsComponent } from "./ads/ads.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeComponent } from "./home/home.component";
import { FeatureMainComponent } from "./home/feature-main/feature-main.component";
import { FeatureComponent } from "./home/feature-main/feature/feature.component";
import { FeatureThumbComponent } from "./home/feature-main/feature-thumb/feature-thumb.component";
import { PopularComponent } from "./home/popular-main/popular.component";
import { PopularPostComponent } from "./home/popular-main/popular-post/popular-post.component";
import { PopularThumbComponent } from "./home/popular-main/popular-thumb/popular-thumb.component";
import { EditorialPostComponent } from "./home/editorial-main/editorial-post/editorial-post.component";
import { EditorialThumbComponent } from "./home/editorial-main/editorial-thumb/editorial-thumb.component";
import { EditorialComponent } from "./home/editorial-main/editorial.component";
import { CategoryMainComponent } from "./category-main/category-main.component";
import { CategoryPostComponent } from "./category-main/category-post/category-post.component";
import { CommentComponent } from "./comment/comment.component";
import { NewsletterComponent } from "./newsletter/newsletter.component";
import { LatestSidePostComponent } from "./latest-side-post/latest-side-post.component";
import { PopularSidePostComponent } from "./popular-side-post/popular-side-post.component";
import { ContentPostComponent } from './content-main/content-post/content-post.component';
import { ContentMainComponent } from './content-main/content-main.component';
import { ArticleComponent } from './article/article.component';
import { MainContentComponent } from './article/main-content/main-content.component';
import { CommentListComponent } from './article/comment-list/comment-list.component';
import { AddCommentComponent } from './article/add-comment/add-comment.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdsComponent,
    HomeComponent,
    FeatureMainComponent,
    FeatureComponent,
    FeatureThumbComponent,
    PopularComponent,
    PopularPostComponent,
    PopularThumbComponent,
    EditorialComponent,
    EditorialPostComponent,
    EditorialThumbComponent,
    FooterComponent,
    CategoryMainComponent,
    CategoryPostComponent,
    LatestSidePostComponent,
    PopularSidePostComponent,
    CommentComponent,
    NewsletterComponent,
    ContentMainComponent,
    ContentPostComponent,
    ArticleComponent,
    MainContentComponent,
    CommentListComponent,
    AddCommentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
