import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListOfContactUsComponent } from './list-of-contact-us.component';

describe('ListOfContactUsComponent', () => {
  let component: ListOfContactUsComponent;
  let fixture: ComponentFixture<ListOfContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListOfContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListOfContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
