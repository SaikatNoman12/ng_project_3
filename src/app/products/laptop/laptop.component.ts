import { HeaderService } from './../../appServices/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laptop',
  templateUrl: './laptop.component.html',
  styleUrls: ['./laptop.component.scss']
})
export class LaptopComponent implements OnInit {

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
