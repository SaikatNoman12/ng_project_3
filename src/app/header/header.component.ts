import { TranslateService } from '@ngx-translate/core';
import { HeaderService } from './../appServices/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  galSerProBack: any;
  contact: any;
  signIn: any;
  langSwitch: any;
  browserLang: any;
  headerStatus: any;

  constructor(
    private _headerService: HeaderService,
    private router: Router,
    public translate: TranslateService
  ) {

    this._headerService.galleryBackShow.subscribe((res: any) => {
      this.galSerProBack = res;
    });

    this._headerService.logIn.subscribe((res: any) => {
      this.signIn = res;
    });

    this._headerService.translateData.subscribe((res: any) => {
      this.langSwitch = res;
    });

    _headerService.sendLocation.subscribe((res: any) => {
      this.headerStatus = res;
    });




    translate.addLangs(['dn', 'en']);
    translate.setDefaultLang('en');
    translate.use('en');
    this.browserLang = translate.getDefaultLang();
    translate.use('en');
    // same this upper line code.
    /* this.browserLang = translate.getBrowserLang(); */
    this.languageChange();
    this._headerService.translateData.next(this.browserLang);

  }

  ngOnInit(): void {
  }

  signInBtn() {
    if (this.signIn.sign.toLowerCase() !== 'sign in') {
      this._headerService.logIn.next({ sign: '', btnData: '' });
    }
    
    if (window.location.pathname.match('/dn/') || window.location.pathname === '/dn') {
      this.router.navigate(['dn/login']);
    }
    else {
      this.router.navigate(['login']);
    }
  }

  languageSelect(lang: string): void {
    this.translate.use(lang);
    this._headerService.translateData.next(lang);
  }

  languageChange() {
    this.translate.use(this.browserLang.match(/dn|en/) ? this.browserLang : 'en');
  }



}
