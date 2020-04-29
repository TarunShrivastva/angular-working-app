import { Component, OnInit, Renderer2, Inject } from "@angular/core";
import { GlobalService } from "./services/global.service";
import { DOCUMENT } from '@angular/common';

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

  constructor(
    private globalService: GlobalService,
    private renderer2: Renderer2,
    @Inject(DOCUMENT) private document: Document
    ) {}

  ngOnInit() {
    this.setMetaTags(this.data);

    let script = this.renderer2.createElement('script');
        script.type = `application/ld+json`;
        script.text = `
        {
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://google.com/article"
          },
          "headline": "Article headline",
          "image": [
            "https://example.com/photos/1x1/photo.jpg",
            "https://example.com/photos/4x3/photo.jpg",
            "https://example.com/photos/16x9/photo.jpg"
           ],
          "datePublished": "2015-02-05T08:00:00+08:00",
          "dateModified": "2015-02-05T09:20:00+08:00",
          "author": {
            "@type": "Person",
            "name": "John Doe"
          },
           "publisher": {
            "@type": "Organization",
            "name": "Google",
            "logo": {
              "@type": "ImageObject",
              "url": "https://google.com/logo.jpg"
            }
          },
          "description": "A most wonderful article"
        }`;
    this.renderer2.appendChild(this.document.head, script);
  }

  setMetaTags(data: object[]): void {
    this.globalService.setMetaTags("heros", data);
  }
}
