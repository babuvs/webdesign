import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { GeneralserviceService } from '../generalservice.service';
import { HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-studentlist',
  templateUrl: './studentlist.component.html',
  styleUrls: ['./studentlist.component.css']
})
export class StudentlistComponent implements OnInit {
  students = [];
  constructor(
    private router: Router,
    private generalService: GeneralserviceService,
    private modalService: NgbModal
  ) { }

  ngOnInit() {
    this.findAll();
  }

  navigating() {
    this.router.navigate(['students/create']);
  }

  edit(id) {
    this.router.navigate(['students', id, 'edit']);
  }

  delete(id) {
    // this.students.splice(i, 1);
    // this.generalService.setStudents(this.students);
    this.generalService.delete(id).subscribe((res: HttpResponse<any>) => {
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

  open(id) {
    const modalRef = this.modalService.open(NgbdModalContent);
    modalRef.result.then((result) => {
      if (result == 'success') {
        this.findAll()
      }
    }, (reason) => {
      if (reason == 'success') {
        this.findAll()
      }
    });
    modalRef.componentInstance.id = id;
  }



}

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-body">
    <div>
      <div>
        <span class="float-right" (click)="activeModal.dismiss('Cross click')">
          <i class="fa fa-times" aria-hidden="true"></i>
        </span>
      </div>
        <div>
          <p>delet this  record {{id}}?:</p>
        </div>
      </div>
      <div>
        <button type="button" style ="margin: 0% 38%! important;" class="btn btn-dark" (click)="delete(id)">delete</button>
      </div>
    </div>
  `
})
export class NgbdModalContent {
  @Input() id;

  constructor(public activeModal: NgbActiveModal,
    private generalService: GeneralserviceService) {
  }
  delete(id) {
    // this.students.splice(i, 1);
    // this.generalService.setStudents(this.students);
    this.generalService.delete(id).subscribe((res: HttpResponse<any>) => {
      this.activeModal.dismiss('success')
    }, (error: HttpErrorResponse) => {
      alert(error);
    })
  }
}
