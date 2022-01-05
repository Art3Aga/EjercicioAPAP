import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDrawer } from '@angular/material/sidenav';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { ProductsService } from '../../services/products-service/products-service.service';

import { ProductsComponent } from './products.component';

const response: any = {
  header: {
    code: '',
    message: '',
    type: 'success',
    errors: [],
  },
  data: {
    officialName: '',
    officialPhone: '',
    officialEmail: '',
    office: {
      officePhone: '',
      officeAddress: '',
      officeSchedule: '',
    }
  },
};

const ProductsServiceMock = {
  getOfficialByUser: () => of(response),
};

class MatDraweMock {
  toggle: () => {};
}

describe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let service: ProductsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsComponent ],
      providers: [ 
        ProductsService,
        { provide: ProductsService, useValue: ProductsServiceMock },
      ],
      imports: [ HttpClientModule ],
      schemas: [ NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(ProductsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getOfficialByUser method that comes from service', () => {
    const officialSpy = jest.spyOn(component, 'getOfficialByUser');
    component.getOfficialByUser();
    expect(officialSpy).toHaveBeenCalled();
  });

  it('should call setOfficialFromResponse callback', () => {
    const officialSpy = jest.spyOn(component, 'setOfficialFromResponse');
    component.setOfficialFromResponse(response);
    expect(officialSpy).toHaveBeenCalled();
  });

  it('should call getAdvertisements method that comes from service', () => {
    const advertisementSpy = jest.spyOn(component, 'getAdvertisements');
    component.getAdvertisements();
    expect(advertisementSpy).toHaveBeenCalled();
  });

  it('should call setAdvertisementsResponse callback', () => {
    const advertisementSpy = jest.spyOn(component, 'setAdvertisementsResponse');
    component.setAdvertisementsResponse(response);
    expect(advertisementSpy).toHaveBeenCalled();
  });

});
