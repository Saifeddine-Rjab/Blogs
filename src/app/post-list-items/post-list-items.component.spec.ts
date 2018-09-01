import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListItemsComponent } from './post-list-items.component';

describe('PostListItemsComponent', () => {
  let component: PostListItemsComponent;
  let fixture: ComponentFixture<PostListItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostListItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostListItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
