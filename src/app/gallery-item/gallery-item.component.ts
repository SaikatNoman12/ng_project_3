import { HeaderService } from './../appServices/header.service';
import { GalleryItem } from './../appModal/galleryModal';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-gallery-item',
  templateUrl: './gallery-item.component.html',
  styleUrls: ['./gallery-item.component.scss']
})
export class GalleryItemComponent implements OnInit, OnDestroy {

  constructor(
    private activateRoute: ActivatedRoute,
    private galleryItems: GalleryItem,
    private headerService: HeaderService
  ) { }

  getRoute: any;
  getRouteId: any;
  galleryItem: any;

  ngOnInit(): void {

    this.getRoute = this.activateRoute.params.subscribe((params: Params) => {
      this.getRouteId = params['id'];
    });
    // this.galleryItem = this.galleryItems.galleryItems[this.getRouteId - 1];

    const galleryData = this.galleryItems.galleryItems.filter(ele => ele.id === this.getRouteId);
    this.galleryItem = galleryData[0];

    this.headerService.galleryBackShow.next({ text: 'go back gallery', router: 'gallery' });

  }


  ngOnDestroy() {
    this.headerService.galleryBackShow.next({ text: '', router: '' });
  }

}
