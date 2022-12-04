import { HeaderService } from './../appServices/header.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private _headerService: HeaderService,
    private router: Router
  ) { }

  galSerProBack: any;
  contact: any;
  signIn: any;

  ngOnInit(): void {

    this._headerService.galleryBackShow.subscribe((res: any) => {
      this.galSerProBack = res;
    });

    this._headerService.logIn.subscribe((res: any) => {
      this.signIn = res;
    });

  }

  signInBtn() {
    if (this.signIn.sign.toLowerCase() !== 'sign in') {
      this._headerService.logIn.next({ sign: 'Sign In', btnData: '' });
      this.router.navigate(['login']);
    }
    else {
      this.router.navigate(['login']);
    }
  }



}
