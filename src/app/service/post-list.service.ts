import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, Subject } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { postListModel } from '../models/post-list-model';

@Injectable({
  providedIn: 'root'
})
export class PostListService {

  public sendPost$ = new Subject<postListModel>();

  constructor(private _httpClinet: HttpClient) { }

  public getPost(): Observable<any> {
    return this._httpClinet.get('https://jsonplaceholder.typicode.com/posts').pipe(
      catchError(() => {
        return throwError(`post NOT FOUND`)
      })
    );
  }

  public getSinglePost(id: number): Observable<any> {
    return this._httpClinet.get('https://jsonplaceholder.typicode.com/posts' + '/' + id).pipe(
      catchError(() => {
        return throwError(`post NOT FOUND`)
      })
    );
  }


  public sendPost(post: postListModel){
    return this.sendPost$.next(post);
  }




}
