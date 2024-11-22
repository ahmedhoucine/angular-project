import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvPlatformComponent } from './cv-platform.component';

describe('CvPlatformComponent', () => {
  let component: CvPlatformComponent;
  let fixture: ComponentFixture<CvPlatformComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CvPlatformComponent]
    });
    fixture = TestBed.createComponent(CvPlatformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
