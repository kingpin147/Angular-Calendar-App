import { Injectable } from '@angular/core';
import { Appointment } from './appointment.model';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointments: Appointment[] = [];
  private appointmentsSubject = new BehaviorSubject<Appointment[]>(this.appointments);

  getAppointments(date: Date): Appointment[] {
    return this.appointments.filter(appointment => new Date(appointment.date).toDateString() === date.toDateString());
  }

  addAppointment(appointment: Appointment) {
    this.appointments.push(appointment);
    this.appointmentsSubject.next(this.appointments);
  }

  deleteAppointment(appointment: Appointment) {
    const index = this.appointments.indexOf(appointment);
    if (index > -1) {
      this.appointments.splice(index, 1);
      this.appointmentsSubject.next(this.appointments);
    }
  }

  moveAppointment(event: CdkDragDrop<any[]>) {
    const prevIndex = this.appointments.findIndex((d) => d === event.item.data);
    moveItemInArray(this.appointments, prevIndex, event.currentIndex);
    this.appointmentsSubject.next(this.appointments);
  }
}
