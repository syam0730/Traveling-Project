import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnjoyingplacesComponent } from './enjoyingplaces.component';

describe('EnjoyingplacesComponent', () => {
  let component: EnjoyingplacesComponent;
  let fixture: ComponentFixture<EnjoyingplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnjoyingplacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnjoyingplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
