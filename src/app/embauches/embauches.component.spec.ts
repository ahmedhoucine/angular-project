import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmbauchesComponent } from './embauches.component';

describe('EmbauchesComponent', () => {
  let component: EmbauchesComponent;
  let fixture: ComponentFixture<EmbauchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmbauchesComponent]
    });
    fixture = TestBed.createComponent(EmbauchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
