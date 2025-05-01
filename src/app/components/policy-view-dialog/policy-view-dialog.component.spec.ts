import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyViewDialogComponent } from './policy-view-dialog.component';

describe('PolicyViewDialogComponent', () => {
  let component: PolicyViewDialogComponent;
  let fixture: ComponentFixture<PolicyViewDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyViewDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyViewDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
