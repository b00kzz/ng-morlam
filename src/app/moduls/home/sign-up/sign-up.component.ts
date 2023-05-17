import { Component } from '@angular/core';
import { HomeService } from '../home.service';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import Swal from 'sweetalert2';
import { signUp } from '../../model/signUpmodel';
// import { signUp } from '../../model/signUpmodel';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signUpForm = this.formBuilder.group({
    username: "",
    password: "",
    nickname: "",
    email: "",
  });




  constructor(
    private formBuilder: FormBuilder,
    private homeService: HomeService,
    private router: Router,
    private permissionsService: NgxPermissionsService) { }

  ngOnInit(): void {

  }
  onSubmit() {
    const userDTO: signUp = this.signUpForm.value as signUp;

    Swal.fire({
      title: 'ต้องการยืนยันการลงทะเบียน?',
      text: 'ระบบทำการลงทะเบียนเรียบร้อยแล้ว!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, we it!',
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(userDTO);
        this.homeService.signUp(userDTO.username, userDTO.password, userDTO.nickname, userDTO.email).then((res: any) => {
          if (res) {
            Swal.fire({
              icon: 'success',
              title: 'บันทึกข้อมูลสำเร็จ',
              text: '',
              confirmButtonText: 'ตกลง',
            }).then((result) => {
              if (result.isConfirmed) {
                this.router.navigate(['home']);
              }
            })
          } else {
            Swal.fire({
              icon: 'error',
              title: 'กรุณาลองใหม่อีกครั้ง',
              text: 'มี User นี้แล้ว',
            })
          }
        })
      }
      this.ngOnInit();
    });
  }
};
