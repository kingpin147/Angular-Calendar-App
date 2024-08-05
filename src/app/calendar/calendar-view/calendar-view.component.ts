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
  currentMonth: number;
  currentYear: number;

  constructor(private dialog: MatDialog, private appointmentService: AppointmentService) {
    const today = new Date();
    this.currentMonth = today.getMonth();
    this.currentYear = today.getFullYear();
    this.generateDates();
  }

  generateDates() {
    this.dates = [];
    const firstDayOfMonth = new Date(this.currentYear, this.currentMonth, 1);
    const lastDayOfMonth = new Date(this.currentYear, this.currentMonth + 1, 0);
    const numberOfDays = lastDayOfMonth.getDate();
    
    // Get the day of the week the month starts on
    const startDay = firstDayOfMonth.getDay();
    
    // Add previous month's dates to fill the grid if the month doesn't start on Sunday
    for (let i = startDay; i > 0; i--) {
      const prevDate = new Date(firstDayOfMonth);
      prevDate.setDate(firstDayOfMonth.getDate() - i);
      this.dates.push(prevDate);
    }

    // Add current month's dates
    for (let i = 1; i <= numberOfDays; i++) {
      this.dates.push(new Date(this.currentYear, this.currentMonth, i));
    }

    // Add next month's dates to fill the grid if the month doesn't end on Saturday
    const endDay = lastDayOfMonth.getDay();
    for (let i = 1; i < 7 - endDay; i++) {
      const nextDate = new Date(lastDayOfMonth);
      nextDate.setDate(lastDayOfMonth.getDate() + i);
      this.dates.push(nextDate);
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
