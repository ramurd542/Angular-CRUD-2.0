import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path:'', component:EmpDashboardComponent, pathMatch:'full'
  },
  {
    path:'emp-dashboard', component:EmpDashboardComponent, pathMatch :'full'
  },
  {
    path:'**', component:NotFoundComponent, pathMatch :'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
