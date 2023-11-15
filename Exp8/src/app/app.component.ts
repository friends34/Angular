import { Component } from '@angular/core';
import { StudentService } from './student.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Student Details';
  userlist:any[]=[];
  constructor(private studentService:StudentService) {
  }

  ngOnInit():void {
    this.studentService.getUser().subscribe(user => this.userlist = user);
  }
}
