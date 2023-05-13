import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { NgxPermissionsService } from 'ngx-permissions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  userId: any

  constructor(
    private permissionsService: NgxPermissionsService,
    private router: Router, private sanitizer: DomSanitizer

  ) {
    this.initRolePermission();
  }
  ngOnInit(): void {
    this.userId = sessionStorage.getItem('user_id')
    // this.initWorksDataforEdit(this.userId)
  }
  initRolePermission() {
    const user_id = sessionStorage.getItem('user_id');
    const userId: string = (user_id != null && user_id != undefined) ? user_id : '';
    this.userId = userId;
    const user_role = sessionStorage.getItem('user_role');
    const role: string = (user_role != null && user_role != undefined) ? user_role : '';
    if (role == '') {
      this.permissionsService.addPermission('home');
    } else {
      this.permissionsService.addPermission(role);
    }
  }
  logOut() {
    sessionStorage.removeItem('user_role');
    this.router.navigate(['home']).then(() => {
      window.location.reload()
    });
  }

  signUp(){
    this.router.navigate(['signup']).then(() => {
      window.location.reload()
    });
  }


}
