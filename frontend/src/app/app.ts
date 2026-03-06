import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { PatientForm } from './features/patients/components/patient-form/patient-form';
import { PatientList } from './features/patients/components/patient-list/patient-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PatientForm, PatientList],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('STAM');
}
