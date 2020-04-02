/**
 * 
 * we want to delay rendering the routed component view template until all necessary data have been fetched
 * To pre-fetch data for a route we use a route resolver. A route resolver can be implemented as a function or a service.
 */

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { PostListService } from './post-list.service';
import { postListModel } from '../models/post-list-model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class postResolver implements Resolve<postListModel[]> {

    constructor(private _service: PostListService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<postListModel[]> {
        return this._service.getPost();
    }

}