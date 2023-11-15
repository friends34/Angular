import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {
    stulist:any[]=[];
    addStudent(stuname:string,activity:string)
    {
      this.stulist.push({name:stuname,acty:activity});
    }
    getAllStudents()
    {
      return this.stulist;
    }
  constructor() { }
}