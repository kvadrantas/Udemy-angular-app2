import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForPrintInfoServiceComponent } from './for-print-info-service.component';

describe('ForPrintInfoServiceComponent', () => {
  let component: ForPrintInfoServiceComponent;
  let fixture: ComponentFixture<ForPrintInfoServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForPrintInfoServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForPrintInfoServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
