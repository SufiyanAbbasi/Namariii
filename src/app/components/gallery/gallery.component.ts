import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  gallery = {
    Img :[
      {id:1,url:'./assets/images/gallery-images/gallery-image-1.jpg'},
      {id:2,url:'./assets/images/gallery-images/gallery-image-2.jpg'},
      {id:3,url:'./assets/images/gallery-images/gallery-image-3.jpg'},
      {id:4,url:'./assets/images/gallery-images/gallery-image-4.jpg'},
      {id:5,url:'./assets/images/gallery-images/gallery-image-5.jpg'},
      {id:6,url:'./assets/images/gallery-images/gallery-image-6.jpg'},

    ]
  }
}