import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactUsDataDisplayComponent } from './contact-us-data-display.component';

describe('ContactUsDataDisplayComponent', () => {
  let component: ContactUsDataDisplayComponent;
  let fixture: ComponentFixture<ContactUsDataDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactUsDataDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactUsDataDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
