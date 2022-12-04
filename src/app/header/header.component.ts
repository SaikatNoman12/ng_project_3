import { HeaderService } from './../appServices/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _headerService: HeaderService
  ) { }

  galSerProBack:any;

  ngOnInit(): void {

    this._headerService.galleryBackShow.subscribe((res: any) => {
      this.galSerProBack = res;
    });

    console.log(this.galSerProBack);

  }

}
