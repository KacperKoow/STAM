import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { PatientService } from '../../services/patient.service';
import { Patient } from '../../models/patient.model';

@Component({
  selector: 'app-patient-form',
  imports: [FormsModule, ButtonModule, InputTextModule],
  templateUrl: './patient-form.html',
  styleUrl: './patient-form.scss',
})
export class PatientForm {
  private patientService = inject(PatientService);

  newPatient: Patient = { firstName: '', lastName: '', mainSymptom: '' };

  savePatient() {
    if (!this.newPatient.firstName || !this.newPatient.lastName) return;

    this.patientService.addPatient(this.newPatient).subscribe(() => {
      this.patientService.loadPatients();
      this.newPatient = { firstName: '', lastName: '', mainSymptom: '' };
    });
  }
}
