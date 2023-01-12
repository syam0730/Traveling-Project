import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NatureplacesComponent } from './natureplaces.component';

describe('NatureplacesComponent', () => {
  let component: NatureplacesComponent;
  let fixture: ComponentFixture<NatureplacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NatureplacesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NatureplacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
