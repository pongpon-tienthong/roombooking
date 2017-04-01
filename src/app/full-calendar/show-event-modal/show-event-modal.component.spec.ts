import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEventModalComponent } from './show-event-modal.component';

describe('ShowEventModalComponent', () => {
  let component: ShowEventModalComponent;
  let fixture: ComponentFixture<ShowEventModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowEventModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowEventModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
