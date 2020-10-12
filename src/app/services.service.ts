import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { PersonModel } from 'src/Models/Model';
@Injectable({
  providedIn: 'root',
})
export class ServicesService {
  constructor(private http: HttpClient) {}
  // userData = new PersonModel();
  /* getData(): Observable<any[]> {
    return this.http.get<any[]>("url");
  }*/
  private userData = new PersonModel();
  getData() {
    return this.userData.users;
  }
}
