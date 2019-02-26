import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { StudentcreateEditComponent } from './studentcreate-edit/studentcreate-edit.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralserviceService } from './generalservice.service';
import { HttpClientModule } from '@angular/common/http';

const routing: Routes = [
  {path: 'student', component: StudentlistComponent},
  {path: 'studentcreate', component: StudentcreateEditComponent},
  {path: 'student-edit/:id', component: StudentcreateEditComponent},
  { path: '',
      redirectTo: '/student',
      pathMatch: 'full'
    }
  ];
@NgModule({
  declarations: [
    AppComponent,
    StudentlistComponent,
    StudentcreateEditComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routing, {enableTracing: true})
  ],
  providers: [GeneralserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
