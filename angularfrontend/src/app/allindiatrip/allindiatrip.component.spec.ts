import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllindiatripComponent } from './allindiatrip.component';

describe('AllindiatripComponent', () => {
  let component: AllindiatripComponent;
  let fixture: ComponentFixture<AllindiatripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllindiatripComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllindiatripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
