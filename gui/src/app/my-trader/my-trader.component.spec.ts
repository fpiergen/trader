import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTraderComponent } from './my-trader.component';

describe('MyTraderComponent', () => {
  let component: MyTraderComponent;
  let fixture: ComponentFixture<MyTraderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTraderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTraderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
