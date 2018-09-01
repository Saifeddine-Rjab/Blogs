import {Subject} from 'rxjs';
import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class BlogsService implements OnInit {

  blogSubject = new Subject<any[]>();
  private blogs = [];
  loadedFirsttime: Boolean = false;

  emitBlogsSubject() {
    this.blogSubject.next(this.blogs.slice());
  }

  constructor (private httpClient: HttpClient) { }


  ngOnInit(): void {
    if (!this.loadedFirsttime) {
      this.httpClient
        .get <any[]>('https://blogs-c719c.firebaseio.com/blogs.json')
        .subscribe(
          (response) => {
            this.blogs = response;
            this.emitBlogsSubject();
            console.log('chargement  réussi');
          },
          (error) => {
            console.log('Erreur de chargement ' + error);
          }
        );
      this.loadedFirsttime = true;
    }
  }
  saveBlogsToServer() {
    this.httpClient.put('https://blogs-c719c.firebaseio.com/blogs.json', this.blogs)
      .subscribe(
        () => {
          console.log('Enregistrement terminé');
          // this.getBlogsFromServer();
          this.emitBlogsSubject();
        },
        (error) => {
          console.log('Erreur de sauvgarde ' + error);
        }
      );
  }


  addBlog(title: string, content: string, loveIts: number, created_at: number) {
    const blogObject = {
      content: '',
      created_at: 0,
      loveIts: 0,
      title: '',
    };
    blogObject.title = title;
    blogObject.content = content;
    blogObject.loveIts = loveIts;
    blogObject.created_at = created_at;

    this.blogs.push(blogObject);

    console.log(blogObject);
    console.log('added successfuly');
    this.saveBlogsToServer();

  }

}
