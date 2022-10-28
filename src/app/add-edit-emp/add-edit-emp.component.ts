import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.scss']
})
export class AddEditEmpComponent implements OnInit {
  @Input() empformvalue!: FormGroup;
  constructor(private formbuilder: FormBuilder) { }

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
