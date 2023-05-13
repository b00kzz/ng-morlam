import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from '../admin.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.css']
})
export class EdituserComponent implements OnInit {
  constructor(
    private activatedroute: ActivatedRoute,
    private adminservice: AdminService,
    private fb: FormBuilder,
    private router: Router
  ) { }
  userid: any

  editForm = this.fb.group({
    userid: '',
    roleid: '',
    username: '',
    password: '',
    nickname: '',
    email: '',
    avatar: '',
    createdby: '',
    createddate: '',
    updatedby: '',
    updateddate: '',
  });

  ngOnInit() {
    this.userid = this.activatedroute.snapshot.paramMap.get("userid");
    this.initWorksDataforEdit(this.userid)
  }
  initWorksDataforEdit(userid: any) {
    this.adminservice.getByUserId(userid).subscribe((res) => {
      console.log('res => ', res)
      if (res) {
        this.editForm.patchValue({
          userid: res.userid,
          roleid: res.roleid,
          username: res.username,
          nickname: res.nickname,
          email: res.email,
          avatar: res.avatar,
          createdby: res.createdby,
          createddate: res.createddate,
          updateddate: res.updateddate,
        })
      }


    });

  }

  onSubmit() {
    const UserDto =  this.editForm.value;
    // UserDto.userid = 0
      // workDto.svcId = 0  ห้ามใส่อย่าลืม

      Swal.fire({
       title: 'ต้องการเเก้ไขข้อมูล?',
       text: "คุณต้องการเเก้ไขข้อมูลใช่หรือไม่!",
       icon: 'warning',
       showCancelButton: true,
       confirmButtonColor: '#56C596' ,
         cancelButtonColor: '#d33',
         confirmButtonText: 'บันทึก',
         cancelButtonText: 'ยกเลิก'
     }).then((result) => {
       if (result.isConfirmed) {
         this.adminservice.updateUser(UserDto.userid, UserDto ,).subscribe(res => {
           Swal.fire(
             'success!',
             'Your file has been success.',
             'success'
           )
           this.router.navigate(['admin/manage']);
         });

       }
     })
  }

}


