import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  
  constructor(
    private adminService: AdminService,
    private router: Router,
  ) { }

  listUser: any;

  ngOnInit() {
    this.adminService.getAllUsers().subscribe(res => {
      console.log('res =>', res)
      if (res) {
        this.listUser = res.user;
        console.log(res.user)
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
        this.adminService.delete1User(Number(item.userid)).then(res => {
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
  onGetUser(item: any) {
    this.router.navigate(['/admin/user/', item.userid]);
  }

}
