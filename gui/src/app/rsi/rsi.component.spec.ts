import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RsiComponent } from './rsi.component';

describe('RsiComponent', () => {
  let component: RsiComponent;
  let fixture: ComponentFixture<RsiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RsiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
