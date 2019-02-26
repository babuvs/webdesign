import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeneralserviceService } from '../generalservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-studentcreate-edit',
  templateUrl: './studentcreate-edit.component.html',
  styleUrls: ['./studentcreate-edit.component.css']
})
export class StudentcreateEditComponent implements OnInit, OnDestroy {
  student: FormGroup;
  students: Array<any>;
  isedit: boolean;
  index: any;
  paramsSubscription: Subscription;
  constructor(
    private fb: FormBuilder,
    private studservice: GeneralserviceService,
    private route: Router,
    private router: ActivatedRoute
  ) { }

  ngOnInit() {
    this.student = this.fb.group({
      name: ['', Validators.required],
      batch: ['', Validators.required],
      branch: ['', Validators.required],
    })
    this.students = this.studservice.getStudents() || [];
    this.paramsSubscription = this.router.params.subscribe(params => {
      if(params['id']) {
       this.studservice.findAOneSudents(params['id']).subscribe((res:HttpResponse<any>) => {
          const student = res.body;
          this.student.patchValue(student);
       })
        
        this.isedit = true;
        this.index = params['id'];
      }
    })
  }

  save() {
    if (this.student.invalid) {
      return;
    }
    const data = this.student.value;
    if(this.isedit) {
      this.studservice.update(data, this.index).subscribe((res:HttpResponse<any>)=> {
        this.route.navigate(['student']);
      },(res: HttpErrorResponse) => this.error(res))
    } else {
      this.studservice.create(data).subscribe((res:HttpResponse<any>)=> {
        this.route.navigate(['student']);
      },(res: HttpErrorResponse) => this.error(res))
    }
    this.studservice.setStudents(this.students);
    
  }

  error(res) {
    alert(res);
  }

  ngOnDestroy() {
    console.log("Component will be destroyed");
    this.paramsSubscription.unsubscribe();
  }

}
