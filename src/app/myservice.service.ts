import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, } from '@angular/common/http';
import { map, filter, scan } from 'rxjs/operators';
import { Observable, Subject, asapScheduler, pipe, of, from, interval, merge, fromEvent } from 'rxjs';
import {UsersModel} from '../app/models/usersModel';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }
  getTodaysDate() {
    return new Date();
  }
  getRemoteData (): Observable<UsersModel[]>  {
    return this.http.get<UsersModel[]>('http://jsonplaceholder.typicode.com/users');
  }
}
