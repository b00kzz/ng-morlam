import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  }, {
    path: 'home', loadChildren: () => import('./moduls/home/home.module').then(m => m.HomeModule)
  }, {
    path: 'admin', loadChildren: () => import('./moduls/admin/admin.module').then(m => m.AdminModule)
  }, {
    path: 'user', loadChildren: () => import('./moduls/users/user.module').then(m => m.UserModule)
  },{
    path: 'manager', loadChildren: () => import('./moduls/employee/employee.module').then(m => m.EmployeeModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
