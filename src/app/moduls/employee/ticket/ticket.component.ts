import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements  OnInit {

  constructor(
    private employeeService: EmployeeService,
    private router: Router,
  ) { }
  listTicket: any
  ngOnInit(): void {
      this.employeeService.getAllTicket().subscribe(res => {
        console.log('res =>', res)
        if (res) {
          this.listTicket = res;
          console.log(res)
        }
      });
  }

  onDelete(item: any) {
    Swal.fire({
      title: 'ต้องการลบข้อมูล?',
      text: "คุณต้องการลบข้อมูลใช่หรือไม่!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.deleteTicket(Number(item.ticketid)).then(res => {
          console.log(item.ticketid)
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
          this.ngOnInit()
        });
      }
    })
  }
  onGetTicket(item: any) {
    this.router.navigate(['/manager/ticket/', item.ticketid]);
  }
  onGetAddticket() {
    this.router.navigate(['/manager/addticket']);
  }
  
}
