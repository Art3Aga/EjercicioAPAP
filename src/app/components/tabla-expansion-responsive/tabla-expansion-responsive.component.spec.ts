import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaExpansionResponsiveComponent } from './tabla-expansion-responsive.component';

describe('TablaExpansionResponsiveComponent', () => {
  let component: TablaExpansionResponsiveComponent;
  let fixture: ComponentFixture<TablaExpansionResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaExpansionResponsiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaExpansionResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
