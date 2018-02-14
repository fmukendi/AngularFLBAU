import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GapAndWrapComponent } from './gap-and-wrap.component';

describe('GapAndWrapComponent', () => {
  let component: GapAndWrapComponent;
  let fixture: ComponentFixture<GapAndWrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GapAndWrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GapAndWrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
