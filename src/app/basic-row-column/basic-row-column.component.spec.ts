import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicRowColumnComponent } from './basic-row-column.component';

describe('BasicRowColumnComponent', () => {
  let component: BasicRowColumnComponent;
  let fixture: ComponentFixture<BasicRowColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicRowColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicRowColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
