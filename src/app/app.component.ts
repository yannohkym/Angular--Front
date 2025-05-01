// import { Component, OnInit } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import { HttpClient, HttpClientModule } from '@angular/common/http';
// @Component({
//   selector: 'app-root',
//   imports: [RouterOutlet, HttpClientModule],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent implements OnInit {
//   title = 'insurance-dashboard';
//   constructor(private http: HttpClient) {

//   }
//   public data: any;
//   ngOnInit(): void {
//     this.fetchPolicies();
//   }
//   public fetchPolicies() {
//     this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(
//       (resp: any) => {
//         console.log(resp);
//         this.data = resp;
//       }
//     );
//   }
// }
// here 
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, RouterModule, HttpClientModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'insurance-dashboard';
  policies: any[] = [];
  filteredPolicies: any[] = [];
  selectedPolicy: any = null;
  showEditModal = false;
  filterText = '';

  private apiUrl = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchPolicies();
  }

  fetchPolicies(): void {
    this.http.get<any[]>(this.apiUrl).subscribe((res) => {
      this.policies = res.slice(0, 10); // take 10 sample items
      this.filteredPolicies = [...this.policies];
    });
  }

  filterPolicies(): void {
    this.filteredPolicies = this.policies.filter(p =>
      p.title.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  viewPolicy(policy: any): void {
    this.selectedPolicy = policy;
  }

  openEditModal(policy: any): void {
    this.selectedPolicy = { ...policy };
    this.showEditModal = true;
  }

  updatePolicy(): void {
    this.http.put(`${this.apiUrl}/${this.selectedPolicy.id}`, this.selectedPolicy).subscribe((res) => {
      const index = this.policies.findIndex(p => p.id === this.selectedPolicy.id);
      this.policies[index] = this.selectedPolicy;
      this.filterPolicies();
      this.showEditModal = false;
    });
  }

  deletePolicy(id: number): void {
    this.http.delete(`${this.apiUrl}/${id}`).subscribe(() => {
      this.policies = this.policies.filter(p => p.id !== id);
      this.filterPolicies();
    });
  }

  closeModal(): void {
    this.showEditModal = false;
  }
}
