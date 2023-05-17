import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';
import { FormBuilder } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-ticket',
  templateUrl: './update-ticket.component.html',
  styleUrls: ['./update-ticket.component.css']
})
export class UpdateTicketComponent implements OnInit {
  constructor(
    private activatedroute: ActivatedRoute,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private router: Router
  ) { }
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

  ngOnInit() {
    this.ticketid = this.activatedroute.snapshot.paramMap.get("ticketid");
    this.initWorksDataforEdit(this.ticketid)
  }
  initWorksDataforEdit(ticketid: any) {
    this.employeeService.getTicketId(ticketid).then((res: any) => {
      console.log('res => ', res)
      if (res) {
        this.ticketForm.patchValue({
          ticketid: res.ticketid,
          ticketname: res.ticketname,
          tickettype: res.tickettype,
          ticketprice: res.ticketprice,
          ticketimage: res.ticketimage,
          ticketdesc: res.ticketdesc,
          createdby: res.createdby,
          createddate: res.createddate,
          updatedby: res.updatedby,
          updateddate: res.updateddate,
        })
      }


    });

  }

  onSubmit() {
    const ticketDtail = this.ticketForm.value;
    // UserDto.userid = 0
    // workDto.svcId = 0  ห้ามใส่อย่าลืม

    Swal.fire({
      title: 'ต้องการเเก้ไขข้อมูล?',
      text: "คุณต้องการเเก้ไขข้อมูลใช่หรือไม่!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#56C596',
      cancelButtonColor: '#d33',
      confirmButtonText: 'บันทึก',
      cancelButtonText: 'ยกเลิก'
    }).then((result) => {
      if (result.isConfirmed) {
        this.employeeService.updateTicket(ticketDtail.ticketid, ticketDtail,).subscribe(res => {
          Swal.fire(
            'success!',
            'Your file has been success.',
            'success'
          )
          this.router.navigate(['/manager/tickets']);
        });

      }
    })
  }
}
