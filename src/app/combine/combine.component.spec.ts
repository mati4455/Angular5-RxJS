/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CombineComponent } from './combine.component';

describe('CombineComponent', () => {
  let component: CombineComponent;
  let fixture: ComponentFixture<CombineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CombineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CombineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
