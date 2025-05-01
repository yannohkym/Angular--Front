import { Component } from '@angular/core';

@Component({
  selector: 'app-policy-view-dialog',
  imports: [],
  templateUrl: './policy-view-dialog.component.html',
  styleUrl: './policy-view-dialog.component.css'
})
export class PolicyViewDialogComponent {

}

/*
//changes from here

import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Policy } from 'src/app/models/policy.model';

@Component({
  selector: 'app-policy-view-dialog',
  template: `
    <h1 mat-dialog-title>Policy Details</h1>
    <div mat-dialog-content>
      <p><strong>Policy Number:</strong> {{ data.policyNumber }}</p>
      <p><strong>Holder Name:</strong> {{ data.holderName }}</p>
      <p><strong>Coverage Type:</strong> {{ data.coverageType }}</p>
      <p><strong>Premium:</strong> ${{ data.premium }}</p>
      <p><strong>Start Date:</strong> {{ data.startDate }}</p>
      <p><strong>End Date:</strong> {{ data.endDate }}</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>Close</button>
    </div>
  `,
})
export class PolicyViewDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: Policy) { }
}
*/