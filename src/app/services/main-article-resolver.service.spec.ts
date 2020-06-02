import { TestBed } from '@angular/core/testing';

import { MainArticleResolverService } from './main-article-resolver.service';

describe('MainArticleResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainArticleResolverService = TestBed.get(MainArticleResolverService);
    expect(service).toBeTruthy();
  });
});
