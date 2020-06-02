import { Injectable } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";

@Injectable({
  providedIn: "root",
})
export class GlobalService {
  constructor(private metaTagService: Meta, private titleService: Title) {}

  setMetaTags(pageType: string, data: object[]): void {
    this.addMetaTags(data);
    this.addMetaTitle('Home Page');
  }

  addMetaTags(data) {
    this.metaTagService.addTags(data);
  }

  addMetaTitle(title:string) {
    this.titleService.setTitle(title);
  }

  updateMetaTags(name_string:string, content_string:string){
    this.metaTagService.updateTag({
      name: name_string,
      content: content_string,
    });
  }
}
