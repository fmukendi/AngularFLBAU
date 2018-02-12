import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerBasicsComponent } from './container-basics.component';

describe('ContainerBasicsComponent', () => {
  let component: ContainerBasicsComponent;
  let fixture: ComponentFixture<ContainerBasicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerBasicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerBasicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
