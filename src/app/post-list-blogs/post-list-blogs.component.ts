import {Component, OnInit} from '@angular/core';
import {BlogsService} from '../services/blogs.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-post-list-blogs',
  templateUrl: './post-list-blogs.component.html',
  styleUrls: ['./post-list-blogs.component.css']
})
export class PostListBlogsComponent implements OnInit {

  posts: any [];
  blogsSubscription: Subscription;

  constructor(private blogsService: BlogsService) {
  }

  ngOnInit() {
    this.blogsService.ngOnInit();
    this.blogsSubscription = this.blogsService.blogSubject.subscribe(
      (blogs: any[]) => {
        this.posts = blogs;
      }
    );
    this.blogsService.emitBlogsSubject();
  }


}
