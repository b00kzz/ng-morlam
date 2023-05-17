import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import { EmployeeService } from '../employee.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-ticket',
  templateUrl: './add-ticket.component.html',
  styleUrls: ['./add-ticket.component.css']
})
export class AddTicketComponent implements OnInit {

  constructor (
    private employeeSvc: EmployeeService,
    private fb: FormBuilder,
    private router: Router,
    private permissionsService: NgxPermissionsService
  ) {}

  ticketid: any

  ticketForm = this.fb.group({
    ticketid: '',
    ticketname: '',
    tickettype: '',
    ticketprice: '',
    ticketimage: '',
    ticketdesc: '',
    createdby: '',
    createddate: '',
    updatedby: '',
    updateddate: '',
  });

  ngOnInit(): void {
      
  }

  onSubmit() {
    const ticketmd = this.ticketForm.value;
    // workDto.workId = 0
    // workDto.svcId = 0  ห้ามใส่อย่าลืม
    Swal.fire({
      title: 'ต้องการบันทึก?',
      text: "คุณต้องการบันทึกข้อมูลใช่หรือไม่!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#56C596',
      cancelButtonColor: '#d33',
      confirmButtonText: 'บันทึก',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeSvc.addTicket(ticketmd).then((res:any ) => {
          // this.carDetailId = res.data;
          Swal.fire(
            'บันทึก!',
            'บันทึกสำเร็จ',
            'success'
          )
          this.router.navigate(['manager/tickets']);
        });

      }else{
        Swal.fire({
          icon: 'error',
          title: 'กรุณาลองใหม่อีกครั้ง',
          text: 'มี User นี้แล้ว',
        })
      }
    })
  }

  // goBack() {
  //   this.router.navigate(['home/car']);
  // }

}
