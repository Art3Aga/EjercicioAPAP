import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { NavbarComponent } from './components/navbar/navbar.component';
import { CardComponent } from './components/card/card.component';
import { HomeComponent } from './views/home/home.component';
import { ChartComponent } from './components/chart/chart.component';
import { DonutChartComponent } from './components/donut-chart/donut-chart.component';

//Angular Material Components
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSortModule } from '@angular/material/sort';
import { MatMenuModule } from '@angular/material/menu';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';



//Librarys
import { ChartsModule } from 'ng2-charts';
import { TablaResponsiveComponent } from './components/tabla-responsive/tabla-responsive.component';
import { TablasComponent } from './views/tablas/tablas.component';
import { ResponsiveTableDirective } from './directives/responsive-table.directive';

import { LayoutModule } from '@angular/cdk/layout';
import { TablaExpansionResponsiveComponent } from './components/tabla-expansion-responsive/tabla-expansion-responsive.component';
import { ExpansionTableDirective } from './directives/expansion-table.directive';


//Http
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CardComponent,
    HomeComponent,
    ChartComponent,
    DonutChartComponent,
    TablaResponsiveComponent,
    TablasComponent,
    ResponsiveTableDirective,
    TablaExpansionResponsiveComponent,
    ExpansionTableDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatExpansionModule,
    MatSortModule,
    ChartsModule,
    MatMenuModule,
    LayoutModule,
    MatListModule,
    MatRippleModule,
    MatCheckboxModule,
    FormsModule,
    MatSlideToggleModule,
    MatButtonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
