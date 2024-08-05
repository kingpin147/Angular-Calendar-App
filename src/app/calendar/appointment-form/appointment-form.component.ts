import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-appointment-form',
  templateUrl: './appointment-form.component.html',
  styleUrls: ['./appointment-form.component.css']
})
export class AppointmentFormComponent {
  appointmentForm: FormGroup;

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<AppointmentFormComponent>) {
    this.appointmentForm = this.fb.group({
      title: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.appointmentForm.valid) {
      this.dialogRef.close(this.appointmentForm.value);
    }
  }
}
