import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageCompletedComponent } from './page-completed.component';

describe('PageCompletedComponent', () => {
  let component: PageCompletedComponent;
  let fixture: ComponentFixture<PageCompletedComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageCompletedComponent]
    });
    fixture = TestBed.createComponent(PageCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
