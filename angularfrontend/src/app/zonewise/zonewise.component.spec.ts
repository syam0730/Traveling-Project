import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonewiseComponent } from './zonewise.component';

describe('ZonewiseComponent', () => {
  let component: ZonewiseComponent;
  let fixture: ComponentFixture<ZonewiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonewiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonewiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
