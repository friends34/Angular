import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  
  constructor(private http:HttpClient) { 

  }
  getUser():Observable<any>{
    return this.http.get("https://jsonplaceholder.typicode.com/users")
  }
}
