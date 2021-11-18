import { Component, DebugElement, ElementRef, Renderer2 } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ResponsiveTableDirective } from './responsive-table.directive';

@Component({
  template: `<table responsiveTable mat-table>
              <thead>
                <tr class="mat-header-row">
                  <th class="mat-header-cell">Fecha</th>
                  <th class="mat-header-cell">Monto</th>
                </tr>
              </thead>
              <tbody>
                  <tr class="mat-row">
                    <td class="mat-cell">18/11/2021</td>
                    <td class="mat-cell">$900</td>
                  </tr>
              </tbody>
            </table>`
})
class MockTablaResponsiveComponent {
}

describe('ResponsiveTableDirective', () => {

  let component: MockTablaResponsiveComponent;
  let fixture: ComponentFixture<MockTablaResponsiveComponent>;
  let el: DebugElement;


  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MockTablaResponsiveComponent, ResponsiveTableDirective]
  });
    fixture = TestBed.createComponent(MockTablaResponsiveComponent);
    component = fixture.componentInstance;
    el = fixture.debugElement;
    //fixture.detectChanges();
  });

  let table: ElementRef;
  let renderer2: Renderer2;

  let directive = new ResponsiveTableDirective(table, renderer2);

  it('should create an instance', () => {
    expect(directive).toBeTruthy();
  });

  it('deberia retornar 3', () => {
    expect(directive.data()).toBe(3);
  });

  it('deberia retornar 8 elementos del header de la tabla', () => {

    const element: HTMLElement = el.nativeElement;
    const table = element.querySelector('table');

    directive.thead = table.querySelector('thead');
    directive.tbody = table.querySelector('tbody');

    directive.getDataColumnAndBody().subscribe(({ columnNames, rows }) => {
      console.log(columnNames.length);
    });

  });

});
