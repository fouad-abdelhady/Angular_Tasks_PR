import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountItemComponent } from './account-item.component';

describe('AccountItemComponent', () => {
  let component: AccountItemComponent;
  let fixture: ComponentFixture<AccountItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AccountItemComponent]
    });
    fixture = TestBed.createComponent(AccountItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
