import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WondersinindiaComponent } from './wondersinindia.component';

describe('WondersinindiaComponent', () => {
  let component: WondersinindiaComponent;
  let fixture: ComponentFixture<WondersinindiaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WondersinindiaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WondersinindiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
