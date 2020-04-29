import { Injectable, Inject, Renderer2 } from '@angular/core';
// import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class AddSchemaService {
  script = null;
  constructor(
    private renderer2: Renderer2,
    // @Inject(DOCUMENT) private document: Document
  ) { }

  createElements(element:string ='script', type:string ='application/ld+json', data:any= {}):void {
    this.script = this.renderer2.createElement(element);
    this.script.type = `type`;
    this.script.text = `
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
  }

  appendElementToHead():void {
    this.renderer2.appendChild(this.document.head, this.script)
  }
}
