import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JustifyingContentComponent } from './justifying-content.component';

describe('JustifyingContentComponent', () => {
  let component: JustifyingContentComponent;
  let fixture: ComponentFixture<JustifyingContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JustifyingContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JustifyingContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
