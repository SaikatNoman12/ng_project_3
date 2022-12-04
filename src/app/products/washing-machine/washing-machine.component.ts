import { HeaderService } from './../../appServices/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-washing-machine',
  templateUrl: './washing-machine.component.html',
  styleUrls: ['./washing-machine.component.scss']
})
export class WashingMachineComponent implements OnInit {

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
