import { Component } from '@angular/core';

@Component({
  selector: 'app-policy-dashboard',
  imports: [],
  templateUrl: './policy-dashboard.component.html',
  styleUrl: './policy-dashboard.component.css'
})
export class PolicyDashboardComponent {

}

/*
// component updated from this point
import { Component, OnInit } from '@angular/core';
import { PolicyService } from 'src/app/services/policy.service';
import { Policy } from 'src/app/models/policy.model';
import { MatDialog } from '@angular/material/dialog';
import { PolicyViewDialogComponent } from '../policy-view-dialog/policy-view-dialog.component';
import { PolicyEditDialogComponent } from '../policy-edit-dialog/policy-edit-dialog.component';

@Component({
  selector: 'app-policy-dashboard',
  templateUrl: './policy-dashboard.component.html',
})
export class PolicyDashboardComponent implements OnInit {
  policies: Policy[] = [];
  filteredPolicies: Policy[] = [];
  filterText: string = '';

  constructor(private policyService: PolicyService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.fetchPolicies();
  }

  fetchPolicies(): void {
    this.policyService.getPolicies().subscribe((data) => {
      this.policies = data;
      this.filteredPolicies = data;
    });
  }

  applyFilter(): void {
    this.filteredPolicies = this.policies.filter((p) =>
      p.policyNumber.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  openViewDialog(policy: Policy): void {
    this.dialog.open(PolicyViewDialogComponent, {
      data: policy,
    });
  }

  openEditDialog(policy: Policy): void {
    const dialogRef = this.dialog.open(PolicyEditDialogComponent, {
      data: { ...policy },
    });

    dialogRef.afterClosed().subscribe((updatedPolicy) => {
      if (updatedPolicy) {
        this.policyService.updatePolicy(updatedPolicy).subscribe(() => {
          this.fetchPolicies();
        });
      }
    });
  }
}
  */
