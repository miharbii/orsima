import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStagiaireComponent } from './list-stagiaire.component';

describe('ListStagiaireComponent', () => {
  let component: ListStagiaireComponent;
  let fixture: ComponentFixture<ListStagiaireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListStagiaireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListStagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
