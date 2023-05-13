import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { TicketComponent } from './ticket/ticket.component';
import { UpdateTicketComponent } from './update-ticket/update-ticket.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';

const routes: Routes = [
  {
    path: 'main', 
    component: EmployeeComponent
},{
  path: 'tickets',
  component: TicketComponent
},{
  path: 'update-ticket/:id',
  component: UpdateTicketComponent
},{
  path: 'add-ticket',
  component: AddTicketComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
