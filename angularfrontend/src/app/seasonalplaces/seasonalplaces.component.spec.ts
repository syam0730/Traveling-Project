import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonalplacesComponent } from './seasonalplaces.component';

describe('SeasonalplacesComponent', () => {
  let component: SeasonalplacesComponent;
  let fixture: ComponentFixture<SeasonalplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeasonalplacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeasonalplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
