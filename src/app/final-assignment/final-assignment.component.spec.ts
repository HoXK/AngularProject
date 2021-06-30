import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalAssignmentComponent } from './final-assignment.component';

describe('FinalAssignmentComponent', () => {
  let component: FinalAssignmentComponent;
  let fixture: ComponentFixture<FinalAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalAssignmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
