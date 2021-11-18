//import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { MatTableModule } from '@angular/material/table';
import { By } from '@angular/platform-browser';
import { UserService } from '../../services/user-service/user-service.service';

import { TablaResponsiveComponent } from './tabla-responsive.component';

describe('TablaResponsiveComponent', () => {
  let component: TablaResponsiveComponent;
  let fixture: ComponentFixture<TablaResponsiveComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync (() => {

   TestBed.configureTestingModule({
      declarations: [ TablaResponsiveComponent ],
      imports: [ MatTableModule, HttpClientTestingModule ],
      providers: [ UserService ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaResponsiveComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    fixture.detectChanges();
  });


  it('deberia filtrar la tabla', async () => {

    fixture.detectChanges();

    expect(component.search_value).toBe('');

    component.search_value = 'Bret';

    expect(component.search_value).toBe('Bret');

    const element: HTMLElement = fixture.nativeElement;

    const row = element.querySelectorAll('tr');

    expect(row.length).toBe(1);


  });

  it('Deberia mostrar lista de usuarios', async () => {
    //UserService.prototype.getUsers().toPromise()
    //expect(component).toBeTruthy();
    //component.users
    //component.getUsers();
    fixture.detectChanges();

    //const element: HTMLElement = el.nativeElement;
    const element: HTMLElement = fixture.nativeElement;

    const tabla = element.querySelectorAll('tr');

    tabla.forEach(v => {
      console.log(v.textContent);
    });




    //console.log(tabla[0].innerHTML);



    //console.log(tabla[0].children.length);


    /*tabla.forEach(data => {
      console.log(data.textContent);
    })*/


    //const tabla_datos = el.queryAll(By.css('table'));

    //console.log(tabla_datos);


    //const a = el.nativeElement.querySelector('tbody tr');

    //console.log(a);


    //console.log(tabla_datos);


    //const table = tabla_datos.children[0];

    //console.log(table.children);



    //expect(tabla_datos).toBeDefined();

    //expect()

    //const listUsers = el.queryAll(By.css('tr'));

    //expect(listUsers.length).toBe(1);


    //console.log(`Lista Usuarios: ${listUsers.length}`);

    //expect(listUsers.length).toBe(12);

  });
});
