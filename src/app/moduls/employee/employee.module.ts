import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { TicketComponent } from './ticket/ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';


@NgModule({
  declarations: [
    TicketComponent,
    UpdateTicketComponent,
    AddTicketComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
