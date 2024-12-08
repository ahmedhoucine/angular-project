import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvModificationComponent } from './cv-modification.component';

describe('CvModificationComponent', () => {
  let component: CvModificationComponent;
  let fixture: ComponentFixture<CvModificationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvModificationComponent]
    });
    fixture = TestBed.createComponent(CvModificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
