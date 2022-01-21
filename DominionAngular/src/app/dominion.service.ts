import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DominionService {
  readonly APIUrl="http://localhost:5000/dominionAPI"

  constructor(private http:HttpClient) { }

  getAllCards():Observable<any[]>{
    return this.http.get<any>(this.APIUrl + '/Cards');
  }

}
