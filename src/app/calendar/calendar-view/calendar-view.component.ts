import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppointmentFormComponent } from '../appointment-form/appointment-form.component';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { AppointmentService } from '../../appointment.service';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.css']
})
export class CalendarViewComponent {
  dates: Date[] = [];
  constructor(private dialog: MatDialog, private appointmentService: AppointmentService) {
    this.generateDates();
  }

  generateDates() {
    const today = new Date();
    for (let i = -7; i <= 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      this.dates.push(date);
    }
  }

  openAppointmentForm() {
    const dialogRef = this.dialog.open(AppointmentFormComponent);
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.appointmentService.addAppointment(result);
      }
    });
  }

  getAppointments(date: Date) {
    return this.appointmentService.getAppointments(date);
  }

  drop(event: CdkDragDrop<unknown[]>) {
    this.appointmentService.moveAppointment(event);
  }
}
