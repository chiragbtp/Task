import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.scss']
})
export class AlbumListComponent implements OnInit {

  id:any;
  allPhotos:any

  constructor() { }

  ngOnInit(): void {
    this.id= localStorage.getItem('dataSource'); 
    this.getAlbumPhoto()
  }


  getAlbumPhoto(){
    fetch('https://jsonplaceholder.typicode.com/photos?albumId='+this.id)
    .then((response) => response.json())
    .then((json) => this.allPhotos=json);;
  }

  goToFullImage(url){
    window.open(url,"_blank")

  }
}
