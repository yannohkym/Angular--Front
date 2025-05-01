import { Component } from '@angular/core';

@Component({
  selector: 'app-policy-edit-dialog',
  imports: [],
  templateUrl: './policy-edit-dialog.component.html',
  styleUrl: './policy-edit-dialog.component.css'
})
export class PolicyEditDialogComponent {

}


/*
//changes to the component from here
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Policy } from 'src/app/models/policy.model';

@Component({
  selector: 'app-policy-edit-dialog',
  template: `
    <h1 mat-dialog-title>Edit Policy</h1>
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <mat-dialog-content>
        <mat-form-field appearance="fill">
          <mat-label>Holder Name</mat-label>
          <input matInput formControlName="holderName" />
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Coverage Type</mat-label>
          <input matInput formControlName="coverageType" />
        </mat-form-field>

        <mat-form-field appearance="fill">
          <mat-label>Premium</mat-label>
          <input matInput type="number" formControlName="premium" />
        </mat-form-field>
      </mat-dialog-content>

      <mat-dialog-actions align="end">
        <button mat-button type="submit">Save</button>
        <button mat-button mat-dialog-close>Cancel</button>
      </mat-dialog-actions>
    </form>
  `,
})
export class PolicyEditDialogComponent {
  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Policy,
    private fb: FormBuilder,
    private dialogRef: MatDialogRef<PolicyEditDialogComponent>
  ) {
    this.form = this.fb.group({
      holderName: [data.holderName],
      coverageType: [data.coverageType],
      premium: [data.premium],
    });
  }

  onSubmit() {
    const updatedPolicy = { ...this.data, ...this.form.value };
    this.dialogRef.close(updatedPolicy);
  }
}
*/