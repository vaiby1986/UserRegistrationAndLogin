import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CSCService {
  private BASE_URL = environment.apiUrl;
  constructor(private http: HttpClient) { }



  public getCountries(): Observable<any> {
    return this.http.get<any>( this.BASE_URL + "Countries");
  }


  public getStates(countryId: number): Observable<any> {
    return this.http.get<any>( this.BASE_URL + 'States?id=' + countryId
    );
  }



  public getCities(stateId: number): Observable<any> {
    return this.http.get<any>(this.BASE_URL + 'Cities?stateid=' + stateId);
  }
}
