import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BpopupComponent } from './bpopup.component';

describe('BpopupComponent', () => {
  let component: BpopupComponent;
  let fixture: ComponentFixture<BpopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BpopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
