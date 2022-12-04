import { Router } from '@angular/router';
import { HeaderService } from './../appServices/header.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private _headerService: HeaderService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit(refer: any) {

    if ((refer.value.uname === '') && (refer.value.pass === '') && refer.value.checkData === false) {
      alert('fill all data');
    }
    else if ((refer.value.uname === '') && (refer.value.pass === '')) {
      alert('please fill username and pass');
    }
    else if ((refer.value.uname === '') && (refer.value.checkData === '')) {
      alert('please fill username and agree me!');
    }
    else if ((refer.value.pass === '') && (refer.value.checkData === '')) {
      alert('please fill username and agree me!');
    }
    else if (refer.value.uname === '') {
      alert('please fill username and agree me!');
    }
    else if (refer.value.pass === '') {
      alert('please fill username and agree me!');
    }
    else if (refer.value.checkData === '') {
      alert('please checked agree me!');
    }
    else {
      if (refer.value.pass === 'admin') {
        this._headerService.logIn.next({sign:refer.value.uname, btnData:'buttonActive'});
        this.router.navigate(['home']);
      }
      else {
        alert('Please enter your valid password');
      }
    }
  }

}
