import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { Employee } from '../shared/interfaces/employee';
import { EmpserviceService } from '../shared/shared-service/empservice.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.scss']
})
export class AddEditEmpComponent implements OnInit {
  empformvalue!: FormGroup;
  @Input() emp!:Employee;
  constructor(private formbuilder: FormBuilder, private empService : EmpserviceService) { }

  ngOnInit() {

    this.makeEmpObjEmpty();

  }

  makeEmpObjEmpty(){
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
