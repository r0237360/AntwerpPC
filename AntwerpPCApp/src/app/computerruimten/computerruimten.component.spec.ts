import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComputerruimtenComponent } from './computerruimten.component';

describe('ComputerruimtenComponent', () => {
  let component: ComputerruimtenComponent;
  let fixture: ComponentFixture<ComputerruimtenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComputerruimtenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComputerruimtenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
