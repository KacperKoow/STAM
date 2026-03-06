import { Component, OnInit, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { PatientService } from '../../services/patient.service';

@Component({
  selector: 'app-patient-list',
  imports: [TableModule],
  templateUrl: './patient-list.html',
  styleUrl: './patient-list.scss',
})
export class PatientList implements OnInit {
  
  patientService = inject(PatientService);

  ngOnInit() {
    this.patientService.loadPatients();
  }
}
