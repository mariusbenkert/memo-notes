import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationitemComponent } from './navigationitem.component';

describe('NavigationitemComponent', () => {
  let component: NavigationitemComponent;
  let fixture: ComponentFixture<NavigationitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationitemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
