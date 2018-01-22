import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesFormComponent } from './values-form.component';

describe('ValuesFormComponent', () => {
  let component: ValuesFormComponent;
  let fixture: ComponentFixture<ValuesFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
