import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularSidePostComponent } from './popular-side-post.component';

describe('PopularSidePostComponent', () => {
  let component: PopularSidePostComponent;
  let fixture: ComponentFixture<PopularSidePostComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularSidePostComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularSidePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
