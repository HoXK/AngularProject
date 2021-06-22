import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutUserInputComponent } from './about-user-input.component';

describe('AboutUserInputComponent', () => {
  let component: AboutUserInputComponent;
  let fixture: ComponentFixture<AboutUserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AboutUserInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AboutUserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
