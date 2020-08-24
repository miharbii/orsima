import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutElementComponent } from './ajout-element.component';

describe('AjoutElementComponent', () => {
  let component: AjoutElementComponent;
  let fixture: ComponentFixture<AjoutElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
