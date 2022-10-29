import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AddEditEmpComponent } from '../add-edit-emp/add-edit-emp.component';
import { Employee } from '../shared/interfaces/employee';
import { EmpserviceService } from '../shared/shared-service/empservice.service';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.scss']
})
export class EmpDashboardComponent {

  emp_dashboard_title = 'Angular app with crud operations';
  employeeList: Employee[]=[];
  empFormValue !: FormGroup;
  employeeObj !:Employee;
  edit =false;
  @ViewChild(AddEditEmpComponent, { static: true })
  add_edit_child!: AddEditEmpComponent;
  constructor(private empService : EmpserviceService, private formbuilder : FormBuilder) {
    this.getAllEmployees();
  }
  getAllEmployees(){
    this.empService.getAllEmployees().subscribe((response)=>{
     this.employeeList = response;
    });
  }

  addNewItem(){
    this.createEmpObj();
    if(!this.edit){
      this.empService.AddEmployeee(this.employeeObj).subscribe((response)=>{
      console.log(response);
      alert("Employee Created");
      this.getAllEmployees(); //This will refreshes the Employee Dashboard grid.
      this.add_edit_child.makeEmpObjEmpty(); // Reset add employee form after creting new employee.
      });
    }
    else{
      this.updateEmployee(this.employeeObj);
    }
  }

  createEmpObj(){
    this.employeeObj = new Employee();
    this.empFormValue= this.add_edit_child.empformvalue;
    this.employeeObj.id=this.empFormValue.value.id;
    this.employeeObj.firstname = this.empFormValue.value.firstname;
    this.employeeObj.lastname = this.empFormValue.value.lastname;
    this.employeeObj.emailID = this.empFormValue.value.emailID;
    this.employeeObj.salary = this.empFormValue.value.salary;
    this.employeeObj.mobilenumber = this.empFormValue.value.mobilenumber;
  }

  updateEmployeeForm(emp:Employee){
    this.edit = true;
    this.setEmpForm(emp);
  }

  updateEmployee(emp:Employee){
    this.setEmpForm(emp);
    this.empService.updateEmployee(emp).subscribe((response)=>{
     alert('Updated Employee');
     this.getAllEmployees();
   });
  }

  setEmpForm(emp:Employee){
    this.employeeObj = emp;
    this.add_edit_child.empformvalue = this.formbuilder.group({
      id:[emp.id],
      employeeID :[emp.id],
      firstname:[emp.firstname],
      lastname:[emp.lastname],
      emailID:[emp.emailID],
      salary:[emp.salary],
      mobilenumber:[emp.mobilenumber]
    });
  }

  deleteEmployee(emp:Employee){
    this.empService.deleteEmployee(emp.id).subscribe((response)=>{
      alert('Employee Deleted');
      this.getAllEmployees();
    })
  }

  clearEmployeeFormOnClose(){
    this.add_edit_child.makeEmpObjEmpty();
  }
}
