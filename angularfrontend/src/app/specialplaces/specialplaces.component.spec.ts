import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialplacesComponent } from './specialplaces.component';

describe('SpecialplacesComponent', () => {
  let component: SpecialplacesComponent;
  let fixture: ComponentFixture<SpecialplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpecialplacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpecialplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
