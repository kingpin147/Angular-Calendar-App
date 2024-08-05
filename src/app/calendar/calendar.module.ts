import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarViewComponent } from './calendar-view/calendar-view.component';
import { AppointmentFormComponent } from './appointment-form/appointment-form.component';
import { AppointmentItemComponent } from './appointment-item/appointment-item.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    CalendarViewComponent,
    AppointmentFormComponent,
    AppointmentItemComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    DragDropModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule
  ]
})
export class CalendarModule { }
