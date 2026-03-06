import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Patient } from '../models/patient.model';

@Injectable({
  providedIn: 'root',
})
export class PatientService {
  private http = inject(HttpClient);
  private apiUrl = 'http://localhost:8080/api/patients';

  patients = signal<Patient[]>([]);

  loadPatients() {
    this.http.get<Patient[]>(this.apiUrl).subscribe((data) => {
      this.patients.set(data);
    });
  }

  addPatient(patient: Patient) {
    return this.http.post<Patient>(this.apiUrl, patient);
  }
}
