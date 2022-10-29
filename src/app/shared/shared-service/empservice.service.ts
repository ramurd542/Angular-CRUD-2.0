import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';

@Injectable({
  providedIn: 'root'
})
export class EmpserviceService {

  constructor(private _http :HttpClient) { }

    AddEmployeee(emp:Employee):Observable<any>{
      return this._http.post<any>('http://localhost:3000/posts',emp).pipe(map((res:any)=>{return res;}));
    }

    getAllEmployees() : Observable<any> {
     return this._http.get<any>('http://localhost:3000/posts').pipe(map((res:any)=>{return res}));
    }

    updateEmployee(data:any):Observable<any>{
      return this._http.put('http://localhost:3000/posts/'+data.id, data).pipe(map((res:any)=>{return res;}))
    }

    deleteEmployee(id:number):Observable<any>{
      return this._http.delete<any>('http://localhost:3000/posts/'+id, ).pipe(map((res:any)=>{return res;}))
    }

}
