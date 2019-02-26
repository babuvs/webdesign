import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GeneralserviceService {
  students = [];
  private resourceUrl = 'http://localhost:3000';
  constructor(
    private http: HttpClient
  ) {

  }

  getStudents() {
    return this.students;
  }

  setStudents(students) {
    this.students = students;
  }

  create(data: any): Observable<HttpResponse<any>> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
      })
    };
    return this.http.post<any>(`${this.resourceUrl}/student`, data, httpOptions);
  }

  findAllSudents(): Observable<HttpResponse<Array<any>>> {
    return this.http.get<Array<any>>(`${this.resourceUrl}/student`, { observe: 'response' });
  }

  findAOneSudents(id): Observable<HttpResponse<any>> {
    return this.http.get<any>(`${this.resourceUrl}/student/${id}`, { observe: 'response' });
  }

  update(data: any, id: any): Observable<HttpResponse<any>> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token',
      }),
    };
    return this.http.put<any>(`${this.resourceUrl}/student/${id}`, data, httpOptions);
  }

  delete(id: any): Observable<HttpResponse<any>> {
    return this.http.delete<any>(`${this.resourceUrl}/student/${id}`, { observe: 'response' });
  }
}


