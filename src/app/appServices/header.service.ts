import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  // use for gallery-item, products-item & services-item module:-
  galleryBackShow: any = new BehaviorSubject({ text: '', router: '' });

  logIn:any = new BehaviorSubject({sign:'', btnData:''}); 

  translateData:any = new BehaviorSubject('en');

}
