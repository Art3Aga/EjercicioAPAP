import { AfterViewInit, Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map, mapTo, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[expansionTable]'
})
export class ExpansionTableDirective implements OnInit, AfterViewInit, OnDestroy {

  private cellsToShow: Element[] = [];
  private columnsToShow: string[] = [];

  private table: ElementRef; private renderer: Renderer2;

  private onDestroy$ = new Subject<boolean>();

  private thead!: HTMLTableSectionElement;
  private tbody!: HTMLTableSectionElement;

  private theadChanged$ = new BehaviorSubject(true);
  private tbodyChanged$ = new Subject<boolean>();

  private theadObserver = new MutationObserver(() =>
    this.theadChanged$.next(true)
  );
  private tbodyObserver = new MutationObserver(() =>
    this.tbodyChanged$.next(true)
  );

  constructor() {}

  ngOnInit() {
    this.thead = this.table.nativeElement.querySelector('thead');
    this.tbody = this.table.nativeElement.querySelector('tbody');

    this.theadObserver.observe(this.thead, {
      characterData: true,
      subtree: true
    });
    this.tbodyObserver.observe(this.tbody, { childList: true });
  }

  ngAfterViewInit() {
    /**
     * Set the "data-column-name" attribute for every body row cell, either on
     * thead row changes (e.g. language changes) or tbody rows changes (add, delete).
     */
    combineLatest([this.theadChanged$, this.tbodyChanged$])
      .pipe(
        mapTo({ headRow: this.thead.rows.item(0)!, bodyRows: this.tbody.rows }),
        map(({ headRow, bodyRows }) => ({
          columnNames: [...headRow.children].map(
            headerCell => headerCell.textContent!
          ),
          rows: [...bodyRows].map(row => [...row.children])
        })),
        takeUntil(this.onDestroy$)
      )
      .subscribe(({ columnNames, rows }) => {

        //this.columnsToShow = [ columnNames[0], columnNames[2], columnNames[3] ];

        rows.forEach(rowCells => {

          //this.cellsToShow = [ rowCells[0], rowCells[2], rowCells[3] ];

          rowCells.forEach((cell, index) => {

            this.renderer.setAttribute(
              cell,
              'data-column-name',
              columnNames[(cell as HTMLTableCellElement).cellIndex]
            );
          });

        });
      });
  }

  ngOnDestroy(): void {
    this.theadObserver.disconnect();
    this.tbodyObserver.disconnect();

    this.onDestroy$.next(true);
  }


}
