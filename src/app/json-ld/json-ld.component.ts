import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { productLD } from '../interfaces/product.module';

@Component({
  selector: 'app-json-ld',
  template: '<div [innerHTML]="html"></div>',
  styleUrls: ['./json-ld.component.css']
})
export class JsonLdComponent implements OnInit {
  itemLD = productLD;
  html: SafeHtml;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit(): void {
    this.html = this.getSafeHTML(this.itemLD);
  }

  getSafeHTML(jsonLD: { [key: string]: any }): SafeHtml {
    const json = jsonLD
      ? JSON.stringify(jsonLD, null, 2).replace(/<\/script>/g, "<\\/script>")
      : "";
    // escape / to prevent script tag in JSON
    const html = `<script type="application/ld+json">${json}</script>`;

    return this.sanitizer.bypassSecurityTrustHtml(html);
  }
}
