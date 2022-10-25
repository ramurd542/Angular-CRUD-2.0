import { Component, OnInit } from '@angular/core';
import { Employee } from '../shared/interfaces/employee';

@Component({
  selector: 'app-emp-dashboard',
  templateUrl: './emp-dashboard.component.html',
  styleUrls: ['./emp-dashboard.component.scss']
})
export class EmpDashboardComponent implements OnInit {

  emp_dashboard_title = 'Angular app with crud operations';
  employeeList: Employee[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  //set empty employee object
  makeEmptyEmpObject(){

  }

}
