/**
 * Route Guard	Use
    CanDeactivate	Guard navigation away from the current route
    CanActivate	Guard navigation to a route
    CanActivateChild	Guard navigation to a child route
    CanLoad	Guard navigation to a feature module loaded asynchronously
    Resolve	Perform route data retrieval before route activation

    We will discuss each of these routing guards with an example in our upcoming videos. In this video we will discuss CanDeactivate guard.

    There are 3 steps to use a routing guard in Angular.
    Build the route guard
    Register the guard with angular dependency injection system
    Tie the guard to a route


    CanDeactivate limitations : CanDeactivate guard does not prevent route deactivation
      If you type a different url in the address bar directly OR
      If you close the tab or the browser window OR
      If you navigate to an external URL
 */

import { Injectable } from "@angular/core";
import { CanDeactivate } from '@angular/router';
import { CreatePostComponent } from '../employeee/create-post/create-post.component';

@Injectable({
   providedIn: 'root'
})

export class PostCanDeactivateGuard implements CanDeactivate<any> {

   canDeactivate(component: CreatePostComponent): boolean {
      // return true to nav , else false
      if (component.postForm.dirty) {
         return confirm('Are you sure you want to discard your changes?');
      }
      return true;
   }
} 
