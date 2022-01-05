import { Component, OnInit } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Advertisements } from 'src/app/models/Advertisements';
import { Official } from 'src/app/models/Official';
import { ProductsService } from '../../services/products-service/products-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
  providers: [ ProductsService ]
})
export class ProductsComponent implements OnInit {

  apps: any[] = [
    { icon: 'wifi_protected_setup', text: 'Transferir' },
    { icon: 'important_devices', text: 'Soy digital' },
    { icon: 'payments', text: 'Pagos' },
  ];

  official: Official = null;
  advertisements: Advertisements[] = [];
  toggleOfficialPanel: boolean = false;
  togglePanelRight: boolean = false;

  constructor(private productService: ProductsService) { }

  ngOnInit(): void {
    this.getOfficialByUser();
    this.getAdvertisements();
    
  }

  getOfficialByUser() {
    this.productService.getOfficialByUser('00127345366').subscribe((response) => this.setOfficialFromResponse(response));
  }

  setOfficialFromResponse(response: any) {
    if(response.data) {
      this.official = response.data;
    }
  }

  getAdvertisements() {
    this.productService.getAdvertisements().subscribe((response) => this.setAdvertisementsResponse(response));
  }

  setAdvertisementsResponse(response: any) {
    if(response.data) {
      this.advertisements = response.data.advertisements;
    }
  }

  togglePanel(drawer: any) {
    drawer.toggle();
    this.togglePanelRight = !this.togglePanelRight;
  }



}
