import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaviagtionComponent } from './naviagtion.component';

describe('NaviagtionComponent', () => {
  let component: NaviagtionComponent;
  let fixture: ComponentFixture<NaviagtionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NaviagtionComponent]
    });
    fixture = TestBed.createComponent(NaviagtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
