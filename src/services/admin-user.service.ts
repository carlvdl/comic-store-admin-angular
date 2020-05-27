import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {AdminUser} from '../app/models/AdminUser';
import {BehaviorSubject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {


  private _adminUsers$ =  new BehaviorSubject<AdminUser[]>([]);
  private _total$ = new BehaviorSubject<number>(0);


  constructor(private http: HttpClient) {}

  get adminUsers$(): BehaviorSubject<AdminUser[]> {
    return this._adminUsers$;
  }

  get total$(): BehaviorSubject<number> {
    return this._total$;
  }
  //
  // httpOptions = {
  //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  // };


  // findUsers(filter: string, sortOrder: string, pageNumber: number, pageSize: number): Observable<HttpResponse<AdminUser[]>> {
  findUsers(filter: string, sortOrder: string, limit: number, offset: number): Observable<HttpResponse<AdminUser[]>> {
    console.log('\n\n----> find users, limit...');
    console.log(limit);
    console.log('find users, offset...');
    console.log(offset);
    console.log('<-------\n');
    const result = this.http.get<any>(
      'http://localhost:8080/adminUsers',
      {
        observe: 'response',
        params: new HttpParams()
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('offset', offset.toString())
          .set('limit', limit.toString())
      })
    return result;
  }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

}
