import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnionterritoriesComponent } from './unionterritories.component';

describe('UnionterritoriesComponent', () => {
  let component: UnionterritoriesComponent;
  let fixture: ComponentFixture<UnionterritoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnionterritoriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UnionterritoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
