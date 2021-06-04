import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  
  allPost:any
  constructor( private router: Router) { }

  ngOnInit(): void {
    this.getposts();
  }


  getposts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((json) => this.allPost=json);;
  }

  goToComments(id){
    
    localStorage.setItem('comments', id);
    this.router.navigate(['/home/main/comments'])
  }
}
