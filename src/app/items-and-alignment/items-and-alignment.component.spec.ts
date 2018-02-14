import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsAndAlignmentComponent } from './items-and-alignment.component';

describe('ItemsAndAlignmentComponent', () => {
  let component: ItemsAndAlignmentComponent;
  let fixture: ComponentFixture<ItemsAndAlignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsAndAlignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsAndAlignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
