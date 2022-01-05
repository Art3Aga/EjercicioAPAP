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
import { MatStepperModule } from '@angular/material/stepper';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { MatSidenavModule } from '@angular/material/sidenav'; 



//Librarys
import { ChartsModule } from 'ng2-charts';
import { SwiperModule } from 'swiper/angular';
import { Angular2UsefulSwiperModule } from 'angular2-useful-swiper';
import { IvyCarouselModule } from 'angular-responsive-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { TablaResponsiveComponent } from './components/tabla-responsive/tabla-responsive.component';
import { TablasComponent } from './views/tablas/tablas.component';
import { ResponsiveTableDirective } from './directives/responsive-table.directive';

import { LayoutModule } from '@angular/cdk/layout';
import { TablaExpansionResponsiveComponent } from './components/tabla-expansion-responsive/tabla-expansion-responsive.component';
import { ExpansionTableDirective } from './directives/expansion-table.directive';


//Http
import { HttpClientModule } from '@angular/common/http';
import { TerminosCondicionesComponent } from './views/terminos-condiciones/terminos-condiciones.component';
import { ProductsComponent } from './views/products/products.component';
import { CarouselComponent } from './components/carousel/carousel.component';



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
    TerminosCondicionesComponent,
    ProductsComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCarouselModule,
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
    HttpClientModule,
    MatStepperModule,
    SwiperModule,
    IvyCarouselModule,
    MatSidenavModule,
    CarouselModule
    //Angular2UsefulSwiperModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
