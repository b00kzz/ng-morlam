import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { ManageComponent } from './manage/manage.component';
import { EdituserComponent } from './edituser/edituser.component';
import { AdduserComponent } from './adduser/adduser.component';

const routes: Routes = [
  {
    path: 'main', 
    component: AdminComponent
},{
    path: 'manage',
    component: ManageComponent
},{
    path: 'user/:userid',
    component: EdituserComponent
},{
    path: 'adduser',
    component: AdduserComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
