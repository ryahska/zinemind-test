import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlankcomponentComponent } from './blankcomponent.component';

describe('BlankcomponentComponent', () => {
  let component: BlankcomponentComponent;
  let fixture: ComponentFixture<BlankcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlankcomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
