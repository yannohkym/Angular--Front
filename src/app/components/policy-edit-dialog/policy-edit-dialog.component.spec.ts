import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyEditDialogComponent } from './policy-edit-dialog.component';

describe('PolicyEditDialogComponent', () => {
  let component: PolicyEditDialogComponent;
  let fixture: ComponentFixture<PolicyEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolicyEditDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PolicyEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
