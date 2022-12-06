import { HeaderService } from './../../appServices/header.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent implements OnInit {

  languageStatus: any;

  constructor(
    private _headerService: HeaderService,
    public translate: TranslateService,
  ) {

    this._headerService.translateData.subscribe((res: any) => {
      if (res === 'dn') {
        this.languageStatus = res;
      }
      else {
        this.languageStatus = '';
      }
    });

  }

  ngOnInit(): void {
  }

}
