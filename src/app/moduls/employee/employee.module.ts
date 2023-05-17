import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { TicketComponent } from './ticket/ticket.component';
import { UpdateTicketComponent } from './updateticket/update-ticket.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TicketComponent,
    UpdateTicketComponent,
    AddTicketComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class EmployeeModule { }
