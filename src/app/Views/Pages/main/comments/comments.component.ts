import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {


  id:any;
  allComments:any

  constructor() { }

  ngOnInit(): void {
    this.id= localStorage.getItem('comments'); 
    this.getComments()
  }

  getComments(){
    fetch('https://jsonplaceholder.typicode.com/comments?postId='+this.id)
  .then((response) => response.json())
  .then((json) => this.allComments=json);
  }
}
