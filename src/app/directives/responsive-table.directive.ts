import { AfterViewInit, Directive, ElementRef, OnDestroy, OnInit, Renderer2 } from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import { map, mapTo, takeUntil } from 'rxjs/operators';

@Directive({
  selector: '[responsiveTable]'
})
export class ResponsiveTableDirective implements OnInit, AfterViewInit, OnDestroy {

  private cellsToShow: Element[] = [];
  private columnsToShow: string[] = [];

  private onDestroy$ = new Subject<boolean>();

  public thead!: HTMLTableSectionElement;
  public tbody!: HTMLTableSectionElement;

  private theadChanged$ = new BehaviorSubject(true);
  private tbodyChanged$ = new Subject<boolean>();

  private theadObserver = new MutationObserver(() =>
    this.theadChanged$.next(true)
  );
  private tbodyObserver = new MutationObserver(() =>
    this.tbodyChanged$.next(true)
  );

  constructor(private table: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.thead = this.table.nativeElement.querySelector('thead');
    this.tbody = this.table.nativeElement.querySelector('tbody');

    this.theadObserver.observe(this.thead, {
      characterData: true,
      subtree: true
    });
    this.tbodyObserver.observe(this.tbody, { childList: true });
  }

  data() {
    return 1 + 2;
  }

  getColumnAndRowNames() {
    return map(({ headRow, bodyRows }) => ({
      columnNames: [...headRow.children].map(
        headerCell => headerCell.textContent!
      ),
      rows: [...bodyRows].map(row => [...row.children])
    }));
  }


  getDataColumnAndBody() {
    return combineLatest([this.theadChanged$, this.tbodyChanged$]).pipe(
      mapTo({ headRow: this.thead.rows.item(0)!, bodyRows: this.tbody.rows }),
      this.getColumnAndRowNames(),
      takeUntil(this.onDestroy$)
    );
  }

  ngAfterViewInit() {
    this.getDataColumnAndBody().subscribe(({ columnNames, rows }) => {
        console.log(columnNames);
        rows.forEach(rowCells => {
          rowCells.forEach((cell, index) => {
            this.renderer.setAttribute(
              cell,
              'data-column-name',
              ''
              //columnNames[(cell as HTMLTableCellElement).cellIndex]
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
