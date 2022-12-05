import { HeaderService } from './../../appServices/header.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header-item',
  templateUrl: './header-item.component.html',
  styleUrls: ['./header-item.component.scss']
})
export class HeaderItemComponent implements OnInit {

  constructor(
    public translate: TranslateService,
  ) { }

  ngOnInit(): void {
  }

}
