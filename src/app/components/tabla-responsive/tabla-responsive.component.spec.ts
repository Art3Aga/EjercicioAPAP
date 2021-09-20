import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaResponsiveComponent } from './tabla-responsive.component';

describe('TablaResponsiveComponent', () => {
  let component: TablaResponsiveComponent;
  let fixture: ComponentFixture<TablaResponsiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaResponsiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaResponsiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
