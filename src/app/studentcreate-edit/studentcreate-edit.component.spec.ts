import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentcreateEditComponent } from './studentcreate-edit.component';

describe('StudentcreateEditComponent', () => {
  let component: StudentcreateEditComponent;
  let fixture: ComponentFixture<StudentcreateEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentcreateEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentcreateEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
