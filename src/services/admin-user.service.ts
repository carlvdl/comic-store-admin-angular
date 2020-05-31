import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpParams, HttpResponse} from '@angular/common/http';
import {AdminUser} from '../app/models/AdminUser';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminUserService {


  constructor(private http: HttpClient) {}

  get adminUsers$(): BehaviorSubject<AdminUser[]> {
    return this._adminUsers$;
  }

  get total$(): BehaviorSubject<number> {
    return this._total$;
  }


  private _adminUsers$ =  new BehaviorSubject<AdminUser[]>([]);
  private _total$ = new BehaviorSubject<number>(0);



  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };


  updateAdminUserImage( file: File, adminUserId: number)  {

    console.log('%% updating a admin user image%%');

    const formData = new FormData();
    formData.append('file', file);

    const url = 'http://localhost:8080/adminUser/' + (adminUserId).toString() + '/uploadFile' ;
    return this.http.post(url, formData,
      {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          console.log('uploading..');
          // this.percentDone = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          // this.uploadSuccess = true;
          console.log('uploaded..');
        }
      });
  }


  updateAdminUser(adminUser: AdminUser): Observable<AdminUser> {

      console.log('%% updating a admin user %%');
      const url = 'http://localhost:8080/adminUser/' + (adminUser.adminUserId).toString();
      return this.http.put(url, adminUser, this.httpOptions).pipe(
        tap(_ => console.log(`updated publisher id=${adminUser.adminUserId}`)),
        catchError(this.handleError<any>('updateAdminUser'))
      );
  }


  // findUsers(filter: string, sortOrder: string, pageNumber: number, pageSize: number): Observable<HttpResponse<AdminUser[]>> {
  findUsers(filter: string, sortOrder: string, limit: number, offset: number): Observable<HttpResponse<AdminUser[]>> {

    console.log('\n\nfind users, limit...');
    console.log(limit);
    console.log('find users, offset...');
    console.log(offset);

    const result = this.http.get<AdminUser[]>(
      'http://localhost:8080/adminUsers',
      {
        observe: 'response',
        params: new HttpParams()
          .set('filter', filter)
          .set('sortOrder', sortOrder)
          .set('offset', offset.toString())
          .set('limit', limit.toString())
      });
    return result;
  }


  getAdminUserById(id: number) {
    // const url = `${this.heroesUrl}/${id}`;
    const url = 'http://localhost:8080/adminUser/' + id;

    return this.http.get<AdminUser>(url,
      this.httpOptions
    ).pipe(
      tap(_ => console.log('fetched admin user id=${id}')),
      catchError(this.handleError<AdminUser>('getAdminUser'))
    );
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
