import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationlistComponent } from './navigationlist.component';

describe('NavigationlistComponent', () => {
  let component: NavigationlistComponent;
  let fixture: ComponentFixture<NavigationlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
