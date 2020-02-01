import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputOneComponent } from './input-one.component';

describe('InputOneComponent', () => {
  let component: InputOneComponent;
  let fixture: ComponentFixture<InputOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
