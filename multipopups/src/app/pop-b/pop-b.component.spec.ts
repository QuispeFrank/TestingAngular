import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopBComponent } from './pop-b.component';

describe('PopBComponent', () => {
  let component: PopBComponent;
  let fixture: ComponentFixture<PopBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopBComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
