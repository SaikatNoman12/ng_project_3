import { HeaderService } from './../../appServices/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mobile',
  templateUrl: './mobile.component.html',
  styleUrls: ['./mobile.component.scss']
})
export class MobileComponent implements OnInit {

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
