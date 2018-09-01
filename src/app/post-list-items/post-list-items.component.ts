import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-post-list-items',
  templateUrl: './post-list-items.component.html',
  styleUrls: ['./post-list-items.component.css']
})
export class PostListItemsComponent {


  @Input() title: string ;
  @Input() content: string ;
  @Input() loveIts: number ;
  @Input() created_at: Date ;

  constructor() { }

  loveIt() {
    this.loveIts++;
  }

  dontLoveIt() {
    this.loveIts--;
  }



}
