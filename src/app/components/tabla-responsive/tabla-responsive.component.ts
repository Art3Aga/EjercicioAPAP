import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable } from 'rxjs';
import { UserModel } from '../../models/user-model';
import { UserService } from '../../services/user-service/user-service.service';

@Component({
  selector: 'app-tabla-responsive',
  templateUrl: './tabla-responsive.component.html',
  styleUrls: ['./tabla-responsive.component.scss']
})
export class TablaResponsiveComponent implements OnInit, AfterViewInit  {

  users: UserModel[] = [];
  usuarios$!: Observable<UserModel[]>;
  hide: boolean = false;
  search_value: string = '';

  displayedColumns: string[] = ['fecha', 'referencia', 'descripcion', 'monto', 'moneda', 'balance', 'currency', 'estatus'];
  dataSource!: MatTableDataSource<UserModel>;

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort!: MatSort;

  constructor(public breakpointObserver: BreakpointObserver, private userService: UserService) {
    /*this.users = [
      { fecha: '1/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '2/21/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '3/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '4/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Aplicado' },
      { fecha: '5/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Aplicado' },
      { fecha: '6/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '7/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '8/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
      { fecha: '9/11/19', referencia: 'FT2025584580', descripcion: 'Dr impuesto DGII 0.0015', monto: '-$23,999.99', moneda: 'DOP', balance: '$999,999,999.99', currency: 'DOP', estatus: 'Enviado' },
    ];*/
    //this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {
    this.tableResponsive();
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.dataSource = new MatTableDataSource(users);
      //console.log(this.dataSource);

    });
  }

  ngAfterViewInit() {
    /*this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    this.paginator._intl.itemsPerPageLabel = 'Líneas por página';
    this.paginator._intl.nextPageLabel = 'Siguiente';
    this.paginator._intl.previousPageLabel = 'Anterior';*/
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    this.search_value = filterValue.trim().toLowerCase();
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
