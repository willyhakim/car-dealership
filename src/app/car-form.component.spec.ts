/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarFormComponent } from './car-form.component';

describe('CarFormComponent', () => {
  let component: CarFormComponent;
  let fixture: ComponentFixture<CarFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
