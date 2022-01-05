import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatHorizontalStepper } from '@angular/material/stepper';
import { jsPDF } from "jspdf";

@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.scss']
})
export class TerminosCondicionesComponent implements OnInit, AfterViewInit {

  @ViewChild(MatHorizontalStepper) stepper: MatHorizontalStepper;
  steps: string[];
  
  constructor() { }
  ngAfterViewInit(): void {
    this.stepper._getIndicatorType = () => 'number';
  }

  ngOnInit(): void {
    this.steps = [
      'Vigencia de los Servicios', 'Prueba de Identidad en los Canales Alternos', 'Validez de las Instrucciones',
      'Medios de Prueba', 'Secreto: APAP', 'Costo de la Prestación de Servicios', 'No Responsabilidad',
      'Fraudes'
    ];
  }

  generatePdf() {
    const doc = new jsPDF();
    doc.text(['Hola Mundo', 'Probando'], 10, 10);
    doc.save('Prueba.pdf');
  }

}
