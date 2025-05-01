import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PolicyService {

  constructor() { }
}

// here i added service code

/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Policy } from '../models/policy.model';

@Injectable({
  providedIn: 'root',
})
export class PolicyService {
  private apiUrl = 'https://your-backend-api.com/policies'; // Replace with real API

  constructor(private http: HttpClient) { }

  getPolicies(): Observable<Policy[]> {
    return this.http.get<Policy[]>(this.apiUrl);
  }

  updatePolicy(policy: Policy): Observable<Policy> {
    return this.http.put<Policy>(`${this.apiUrl}/${policy.id}`, policy);
  }
}
  */
