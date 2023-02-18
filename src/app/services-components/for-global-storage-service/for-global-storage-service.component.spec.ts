import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForGlobalStorageServiceComponent } from './for-global-storage-service.component';

describe('ForGlobalStorageServiceComponent', () => {
  let component: ForGlobalStorageServiceComponent;
  let fixture: ComponentFixture<ForGlobalStorageServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForGlobalStorageServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForGlobalStorageServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
