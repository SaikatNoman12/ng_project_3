import { ActivatedRoute, Params } from '@angular/router';
import { ServiceItem } from './../appModal/servicesModal';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services-item',
  templateUrl: './services-item.component.html',
  styleUrls: ['./services-item.component.scss']
})
export class ServicesItemComponent implements OnInit {

  constructor(
    private serviceItem: ServiceItem,
    private activateRoute: ActivatedRoute
  ) { }

  getRoute: any;
  getRouteId: any;
  getServiceProducts: any;
  getServiceProduct: any;

  ngOnInit(): void {

    this.getRoute = this.activateRoute.params.subscribe((params: Params) => {
      this.getRouteId = params['serviceId'];
    });

    this.getServiceProducts = this.serviceItem.services.filter(ele => ele.id === this.getRouteId);

    this.getServiceProduct = this.getServiceProducts[0];

  }

}
