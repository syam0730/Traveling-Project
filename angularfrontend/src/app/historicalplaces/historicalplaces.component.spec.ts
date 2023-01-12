import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoricalplacesComponent } from './historicalplaces.component';

describe('HistoricalplacesComponent', () => {
  let component: HistoricalplacesComponent;
  let fixture: ComponentFixture<HistoricalplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoricalplacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HistoricalplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
