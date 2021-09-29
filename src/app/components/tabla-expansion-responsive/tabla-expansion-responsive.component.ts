import { animate, state, style, transition, trigger } from '@angular/animations';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-expansion-responsive',
  templateUrl: './tabla-expansion-responsive.component.html',
  styleUrls: ['./tabla-expansion-responsive.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class TablaExpansionResponsiveComponent implements OnInit, AfterViewInit {

  users: CustomData[] = [];
  hide: boolean = false;

  expandedElement!: CustomData | null;

  displayedColumns: string[] = ['fecha', 'referencia', 'descripcion', 'monto', 'moneda', 'balance', 'currency', 'estatus'];
  dataSource: MatTableDataSource<CustomData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public breakpointObserver: BreakpointObserver) {
    this.users = [
      { fecha: '1/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '2/21/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '3/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '4/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Aplicado' },
      { fecha: '5/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Aplicado' },
      { fecha: '6/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
    ];
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {
    this.tableResponsive();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Líneas por página';
    this.paginator._intl.nextPageLabel = 'Siguiente';
    this.paginator._intl.previousPageLabel = 'Anterior';
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  tableResponsive() {
    this.breakpointObserver.observe(['(max-width: 768px)']).subscribe((state: BreakpointState) => {
      if (state.matches) {
        this.hide = true;
      } else {
        this.hide = false;
      }
    });
  }

}

export interface CustomData {
  fecha: string;
  referencia: string;
  descripcion: string;
  monto: string;
  moneda: string;
  balance: string;
  currency: string;
  estatus: string;
}
