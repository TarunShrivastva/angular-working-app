import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LatestSidePostComponent } from './latest-side-post.component';

describe('LatestSidePostComponent', () => {
  let component: LatestSidePostComponent;
  let fixture: ComponentFixture<LatestSidePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LatestSidePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LatestSidePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
