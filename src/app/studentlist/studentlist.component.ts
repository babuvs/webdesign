import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralserviceService } from '../generalservice.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students = [];
  constructor(
    private router: Router,
    private generalService: GeneralserviceService
  ) { }

  ngOnInit() {
    this.findAll();
  }

  navigating() {
    this.router.navigate(['studentcreate']);
  }

  edit(id) {
    this.router.navigate(['student-edit', id]);
  }

  delete(id) {
    // this.students.splice(i, 1);
    // this.generalService.setStudents(this.students);
    this.generalService.delete(id).subscribe((res: HttpResponse<any>)=> {
        this.findAll();
      }, (error: HttpErrorResponse) => {
        alert(error);
      })
  }

  findAll() {
    this.generalService.findAllSudents().subscribe((res: HttpResponse<Array<any>>) => {
      this.students = res.body;
    }, (error: HttpErrorResponse) => {
      alert(error);
    })
  }

}
