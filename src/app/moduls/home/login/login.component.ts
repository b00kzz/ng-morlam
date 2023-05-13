import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';
import Swal from 'sweetalert2';
import { HomeService } from '../home.service';
import { loginModel } from '../../model/loginmodel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  });
  
  


  constructor(private formBuilder: FormBuilder,
    private homeService: HomeService,
    private router: Router,
    private permissionsService: NgxPermissionsService) { }



  ngOnInit(): void {

  }
  onSubmit() {
    const userDTO: loginModel = this.loginForm.value as loginModel;

    Swal.fire({
      title: 'ต้องการเข้าสู่ระบบ?',
      text: 'คุณต้องการเข้าสู่ระบบใช่หรือไม่!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, we it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.homeService.getUsernamePassword(userDTO.username, userDTO.password).then((res:any) => {
          console.log(res.user)
          if (res.user) {
            console.log(sessionStorage)
            sessionStorage.removeItem('user_role');
            sessionStorage.removeItem('user_id');
            Swal.fire('success!', 'Your file has been success.', 'success');
            sessionStorage.setItem('user_role', res.user.roleid)
            // sessionStorage.setItem('user_role',res.recordStatus)
            sessionStorage.setItem('user_id', res.user.userid)

            if (res.user.roleid == 3) {
              sessionStorage.setItem('user_role', 'user')
              this.router.navigate(['user/main']).then(() => {
                window.location.reload()
              });
            } else if (res.user.roleid == 1) {
              sessionStorage.setItem('user_role', 'admin')
              this.router.navigate(['admin/main']).then(() => {
                window.location.reload()
              });
            } else if (res.user.roleid == 2) {
              sessionStorage.setItem('user_role', 'manager')
              this.router.navigate(['manager/main']).then(() => {
                window.location.reload()
              });
            

            }
          } else {
            Swal.fire('ไม่สามารถเข้าสู่ระบบได้!', 'Your file has been success.', 'warning');

          


          }
          this.ngOnInit();
        });
      }
    });
  }

}
