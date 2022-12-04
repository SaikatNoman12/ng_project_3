import { GalleryItem } from './../appModal/galleryModal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(
    private galleryItem: GalleryItem
  ) { }

  items: any;

  ngOnInit(): void {
    this.items = this.galleryItem.galleryItems
  }

}
