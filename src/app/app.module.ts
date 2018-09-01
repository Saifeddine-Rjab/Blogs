import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PostListItemsComponent } from './post-list-items/post-list-items.component';
import { PostListBlogsComponent } from './post-list-blogs/post-list-blogs.component';
import {RouterModule, Routes} from '@angular/router';
import { AddBlogComponent } from './add-blog/add-blog.component';
import {BlogsService} from './services/blogs.service';
import {FormsModule} from '@angular/forms';
import {HttpClient, HttpClientModule} from '@angular/common/http';
// TODO setting the other route
const appRoutes: Routes = [
  {path: '', component: PostListBlogsComponent},
  {path: 'blogs', component: PostListBlogsComponent},
  {path: 'addblog', component: AddBlogComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PostListItemsComponent,
    PostListBlogsComponent,
    AddBlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    BlogsService,
    HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
