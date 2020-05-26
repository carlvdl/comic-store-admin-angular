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


  constructor(private http: HttpClient) {

    // this.findUsers('', '', 0, 3).subscribe(response => {
    //   this._adminUsers$.next(response.body);
    //   console.log('..');
    //   console.log('..');
    //   console.log('..');
    //   console.log('..');
    //   console.log(response.headers.get('x-total-count'));
    //   this._total$.next(parseInt(response.headers.get('x-total-count')));
    // });
    //
  }

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


  findUsers(filter: string, sortOrder: string, pageNumber: number, pageSize: number): Observable<HttpResponse<AdminUser[]>> {
    console.log('find users...');
    const result =  this.http.get<any>(
      'http://localhost:8080/adminUsers',
      {
        observe: 'response'
      })
    return result;

    // const result =  this.http.get<any>(
    //   'http://localhost:8080/adminUsers',
    //   {
    //     observe: 'response',
    //     params: new HttpParams()
    //       .set('filter', filter)
    //       .set('sortOrder', sortOrder)
    //       .set('pageNumber', pageNumber.toString())
    //       .set('pageSize', pageSize.toString())
    //   });
    // console.log('result-->');
    // console.log(result);
    // result.subscribe(response => {
    //   console.log('response-->');
    //   console.log(response);
    //   console.log(response.headers);
    //   // this._users$.next(response.body);
    //   // this._total$.next(parseInt(response.headers.get('x-total-count')));
    // });

    // const result =  this.http.get<AdminUser[]>(
    //   'http://localhost:8080/adminUsers',
    //   {
    //     observe: 'response',
    //     params: new HttpParams()
    //       .set('filter', filter)
    //       .set('sortOrder', sortOrder)
    //       .set('pageNumber', pageNumber.toString())
    //       .set('pageSize', pageSize.toString())
    //   });
    // console.log('result-->');
    // console.log(result);
    // result.subscribe(response =>{
    //   console.log('response-->');
    //   console.log(response);
    //   // this._users$.next(response.body);
    //   // this._total$.next(parseInt(response.headers.get('x-total-count')));
    // })
  }

  // findAll(page: number, pageSize: number) {
  //   return this.http.get<AdminUser[]>('http://localhost:8080/adminusers');
  // }

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
