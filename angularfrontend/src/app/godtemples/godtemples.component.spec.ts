import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GodtemplesComponent } from './godtemples.component';

describe('GodtemplesComponent', () => {
  let component: GodtemplesComponent;
  let fixture: ComponentFixture<GodtemplesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GodtemplesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GodtemplesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
