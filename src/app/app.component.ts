import { TranslateService } from '@ngx-translate/core';
import { HeaderService } from './appServices/header.service';
import { EventType, NavigationEnd, Router, RouterEvent } from '@angular/router';
import { Component } from '@angular/core';
import { filter } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newProjectsAngular';

  pageName: string = '';

  constructor(
    private _headerService: HeaderService,
    private router: Router,
    public translate:TranslateService
    ) {

    this.router.events.subscribe((event) => {

      if (event instanceof NavigationEnd) {

        let lastEnd = window.location.pathname.lastIndexOf('/') + 1;
        this.pageName = window.location.pathname.substring(lastEnd);
        _headerService.sendLocation.next(this.pageName);


        if (window.location.pathname.match('/dn/') || window.location.pathname === '/dn') {
          this._headerService.translateData.next('dn');
          translate.use('dn');
        }
        else {
          this._headerService.translateData.next('en');
          translate.use('en');
        }
    

      }
    });

  }

}
