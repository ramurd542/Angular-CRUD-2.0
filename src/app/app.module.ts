import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmpDashboardComponent } from './emp-dashboard/emp-dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddEditEmpComponent } from './add-edit-emp/add-edit-emp.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    EmpDashboardComponent,
    NotFoundComponent,
    AddEditEmpComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
