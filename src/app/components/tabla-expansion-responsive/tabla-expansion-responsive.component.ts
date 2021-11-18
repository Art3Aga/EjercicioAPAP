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
  usolocal: boolean = false;

  expandedElement!: CustomData | null;

  displayedColumns: string[] = ['n_tarjeta', 'usuario', 'tipo_tarjeta', 'limite_compras', 'limite_avance', 'status_tarjeta'];
  dataSource: MatTableDataSource<CustomData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(public breakpointObserver: BreakpointObserver) {
    this.users = [
      { n_tarjeta: 123456789, usuario: 'Alicia Diaz Contreras', tipo_tarjeta: 'Principal', limite_compras: '$999,999.99', limite_avance: '$999,999.99', status_tarjeta: 'Pendiente' },
      { n_tarjeta: 123456789, usuario: 'Alicia Diaz Contreras', tipo_tarjeta: 'Principal', limite_compras: '$999,999.99', limite_avance: '$999,999.99', status_tarjeta: 'Bloqueada' },
      { n_tarjeta: 123456789, usuario: 'Alicia Diaz Contreras', tipo_tarjeta: 'Principal', limite_compras: '$999,999.99', limite_avance: '$999,999.99', status_tarjeta: 'Pendiente' },
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
  n_tarjeta: number;
  usuario: string;
  tipo_tarjeta: string;
  limite_compras: string;
  limite_avance: string;
  status_tarjeta: string;
}
