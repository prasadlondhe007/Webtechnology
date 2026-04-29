import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
   import:[commonModule],
  templateUrl: './student-list.component.html'
})
export class StudentListComponent {

  students: any[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.students = this.studentService.getStudents();
  }
}
