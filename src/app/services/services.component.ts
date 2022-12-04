import { ServiceItem } from './../appModal/servicesModal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor(
    private serviceItem:ServiceItem
  ) { }

  serviceProducts:any;

  ngOnInit(): void {
    this.serviceProducts = this.serviceItem.services;
  }

}
