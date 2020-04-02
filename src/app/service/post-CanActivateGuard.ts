/**
 * A CanActivate guard is useful when we want to check on something before a component gets used.

    This is extremely useful for scenarios like:
        checking if a user is authenticated
        checking if a user has permission
 */

import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { PostListService } from './post-list.service';
import { Injectable } from '@angular/core';
import { postListModel } from '../models/post-list-model';

@Injectable({
    providedIn: 'root'
})
// Make the class implement CanActivate interface as
// we are implementing CanActivate guard service
export class postCanActivateGuard implements CanActivate {

    public isExist: number;

    constructor(private _post: PostListService, private _router: Router) { }
    // Provide implementation for canActivate() method of CanActivate interface
    // Return true if navigation is allowed, otherwise false
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        this._post.getPost().subscribe((list: postListModel[]) => {
            this.isExist = list.findIndex(val => val.id === +route.paramMap.get('id'));

        });
        if (this.isExist) {
            return true
        } else {
            alert(`the post u r looking for don't exist, do u want to create`);
            this._router.navigate(['create'])
            return false
        }
    }


}