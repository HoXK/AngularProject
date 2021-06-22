import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateDrivenFromComponent } from './template-driven-from.component';

describe('TemplateDrivenFromComponent', () => {
  let component: TemplateDrivenFromComponent;
  let fixture: ComponentFixture<TemplateDrivenFromComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateDrivenFromComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateDrivenFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
