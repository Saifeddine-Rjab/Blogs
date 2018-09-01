import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListBlogsComponent } from './post-list-blogs.component';

describe('PostListBlogsComponent', () => {
  let component: PostListBlogsComponent;
  let fixture: ComponentFixture<PostListBlogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListBlogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListBlogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
