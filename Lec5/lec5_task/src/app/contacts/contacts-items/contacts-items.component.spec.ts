import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsItemsComponent } from './contacts-items.component';

describe('ContactsItemsComponent', () => {
  let component: ContactsItemsComponent;
  let fixture: ComponentFixture<ContactsItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsItemsComponent]
    });
    fixture = TestBed.createComponent(ContactsItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
