import { HeaderService } from './../../appServices/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TvComponent implements OnInit {

  constructor(
    private _headerService: HeaderService,
  ) { }

  ngOnInit(): void {
    this._headerService.galleryBackShow.next({ text: 'go to products', router: 'products' });
  }

  ngOnDestroy(): void {
    this._headerService.galleryBackShow.next({ text: '', router: '' });
  }
}
