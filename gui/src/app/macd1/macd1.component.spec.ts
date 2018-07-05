import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Macd1Component } from './macd1.component';

describe('Macd1Component', () => {
  let component: Macd1Component;
  let fixture: ComponentFixture<Macd1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Macd1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Macd1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
