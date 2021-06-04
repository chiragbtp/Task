import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  allAlbum:any

  constructor(  private router: Router) { }

  ngOnInit(): void {
    this.getAlbum()
  }

  
  getAlbum(){
    fetch('https://jsonplaceholder.typicode.com/albums')
    .then((response) => response.json())
    .then((json) => this.allAlbum=json);;
  }

  goToAlbum(id){
    localStorage.setItem('dataSource', id);
    this.router.navigate(['/home/album/albumList'])

  }
}
