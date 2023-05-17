import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { TicketComponent } from './ticket/ticket.component';
import { UpdateTicketComponent } from './updateticket/update-ticket.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';

const routes: Routes = [
  {
    path: 'main', 
    component: EmployeeComponent
},{
  path: 'tickets',
  component: TicketComponent
},{
  path: 'ticket/:ticketid',
  component: UpdateTicketComponent
},{
  path: 'addticket',
  component: AddTicketComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
