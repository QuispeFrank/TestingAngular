import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopAComponent } from './pop-a.component';

describe('PopAComponent', () => {
  let component: PopAComponent;
  let fixture: ComponentFixture<PopAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopAComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
