import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEventModelComponent } from './add-event-model.component';

describe('AddEventModelComponent', () => {
  let component: AddEventModelComponent;
  let fixture: ComponentFixture<AddEventModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddEventModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEventModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
