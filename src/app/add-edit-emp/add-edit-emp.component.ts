import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Employee } from '../shared/interfaces/employee';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.scss']
})
export class AddEditEmpComponent implements OnInit {
  empformvalue!: FormGroup;
  formvalue!: FormGroup;
  employeeObj! : Employee;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.makeEmpObjEmpty();
  }

  makeEmpObjEmpty(){
    this.employeeObj= new Employee();
    this.empformvalue = this.formbuilder.group({
      employeeID :[''],
      firstname:[''],
      lastname:[''],
      emailID:[''],
      salary:[''],
      mobilenumber:['']
   });
  }

}
