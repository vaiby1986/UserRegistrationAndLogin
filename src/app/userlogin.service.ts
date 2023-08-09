import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {

  constructor(private http:HttpClient) { }



  public registerUser(value: FormGroup) : Observable<any> {
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(value);
    console.log(body);
    return this.http.post('https://localhost:7276/api/Login/' + 'RegisterUser', body,{'headers':headers})
  }


  public loginUser(value:FormGroup) : Observable<any>{
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify(value);
    return this.http.post('https://localhost:7276/api/Login/' + 'LoginUser', body,{'headers':headers})
  }
}
