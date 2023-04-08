import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CpopupComponent } from './cpopup.component';

describe('CpopupComponent', () => {
  let component: CpopupComponent;
  let fixture: ComponentFixture<CpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
