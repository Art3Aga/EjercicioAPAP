import { AfterViewInit, Component, OnInit, ViewEncapsulation, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None
})



export class HomeComponent implements AfterViewInit  {

  displayedColumns: string[] = ['no_cuenta', 'balance', 'personalizacion', 'actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor() {
    // Create 100 users
    const users = Array.from({length: 100}, (_, k) => createNewUser(k + 10037834060));

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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

}

export interface UserData {
  no_cuenta: number;
  balance: string;
  personalizacion: string;
}

/** Constants used to fill up our data base. */
const personalizacion: string[] = [
  'Vacaciones Anuales', 'Vacaciones Anuales', 'Vacaciones Anuales', 'Vacaciones Anuales'
];

function createNewUser(id: number): UserData {

  return {
    no_cuenta: id,
    balance: (999000000.98).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","),
    personalizacion: personalizacion[Math.round(Math.random() * (personalizacion.length - 1))],
  };
}
