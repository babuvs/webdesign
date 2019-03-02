import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { StudentlistComponent, NgbdModalContent } from './studentlist/studentlist.component';
import { StudentcreateEditComponent } from './studentcreate-edit/studentcreate-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralserviceService } from './generalservice.service';
import { HttpClientModule } from '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const routing: Routes = [
  {path: 'students', component: StudentlistComponent},
  {path: 'students/create', component: StudentcreateEditComponent},
  {path: 'students/:id/edit', component: StudentcreateEditComponent},
  { path: '',
      redirectTo: '/students',
      pathMatch: 'full'
    }
  ];
@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    StudentcreateEditComponent,
    NgbdModalContent
  ],
  entryComponents: [
    NgbdModalContent
  ],

  imports: [
    BrowserModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routing, {enableTracing: true})
  ],
  providers: [GeneralserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
