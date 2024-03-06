import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageAllComponent } from './page-all.component';

describe('PageAllComponent', () => {
  let component: PageAllComponent;
  let fixture: ComponentFixture<PageAllComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PageAllComponent]
    });
    fixture = TestBed.createComponent(PageAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
