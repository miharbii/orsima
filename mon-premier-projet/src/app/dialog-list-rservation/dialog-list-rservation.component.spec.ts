import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogListRservationComponent } from './dialog-list-rservation.component';

describe('DialogListRservationComponent', () => {
  let component: DialogListRservationComponent;
  let fixture: ComponentFixture<DialogListRservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DialogListRservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogListRservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
