import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainCrossAxisComponent } from './main-cross-axis.component';

describe('MainCrossAxisComponent', () => {
  let component: MainCrossAxisComponent;
  let fixture: ComponentFixture<MainCrossAxisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainCrossAxisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainCrossAxisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
