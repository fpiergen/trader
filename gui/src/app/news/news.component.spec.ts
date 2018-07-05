import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadlineNewsComponent } from './headline-news.component';

describe('HeadlineNewsComponent', () => {
  let component: HeadlineNewsComponent;
  let fixture: ComponentFixture<HeadlineNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeadlineNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadlineNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
