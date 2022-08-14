import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/classes/post';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  mainTitle: string = 'Posts';

  constructor(){}

  listposts: Post[] = [];

  ngOnInit() {
  }
}
