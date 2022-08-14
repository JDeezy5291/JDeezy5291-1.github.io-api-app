import { Component, Input, OnInit, ElementRef, ViewChild} from '@angular/core';
import { ApiService } from 'src/app/services/api.services';
import { Post } from 'src/app/classes/post';

@Component({
  selector: 'app-post', 
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  listposts: Post[];
  listposts1: Post[];
  selectedListPosts: Post[] = [];

  constructor(private _ApiService: ApiService){}

  ngOnInit() {
    this._ApiService.getPosts()
    .subscribe(
      data=> {
        this.listposts1 = data;
        this.selectedListPosts = data.slice(0,10);
      }
    );
  }

  filterPosts() {
    const input = document.getElementById('uidValue') as HTMLInputElement | null;
    const value = parseInt(input.value);

    if(Number(value) && Number(value) <= 10) {
      this.selectedListPosts = this.listposts1.filter((listpost) => {
        return listpost.userId === value;      
      });
    } 
  }  

  loadPosts() {
    let postLength = this.selectedListPosts.length;
    const loadPostsBtn = document.getElementById('post__loadPostsBtn');

    if(postLength <= this.listposts1.length) {
      postLength = postLength + 10;
    }
    this.selectedListPosts = this.listposts1.slice(0, postLength);
  }
}
