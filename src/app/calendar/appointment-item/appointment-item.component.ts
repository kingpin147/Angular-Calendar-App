import { Component, Input } from '@angular/core';
import { Appointment } from '../../appointment.model';
import { AppointmentService } from '../../appointment.service';

@Component({
  selector: 'app-appointment-item',
  templateUrl: './appointment-item.component.html',
  styleUrls: ['./appointment-item.component.css']
})
export class AppointmentItemComponent {
  @Input() appointment!: Appointment;

  constructor(private appointmentService: AppointmentService) { }

  deleteAppointment() {
    this.appointmentService.deleteAppointment(this.appointment);
  }
}
