import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './employeee/post-list/post-list.component';
import { CreatePostComponent } from './employeee/create-post/create-post.component';
import { ViewPostComponent } from './employeee/view-post/view-post.component';
import { PostCanDeactivateGuard } from './service/post.CanDeactiveGuard';
import { postCanActivateGuard } from './service/post-CanActivateGuard';
import { postResolver } from './service/post-resolver-guard';


// The last route is the empty path route. This specifies
// the route to redirect to if the client side path is empty.
const routes: Routes = [
  {
    path: 'list',
    component: PostListComponent,
    /**
     * To do this use the resolve property of the route configuration as shown below. Notice, the value for resolve property is an object with a key and a value. The key is employeeList. You can name it anything you want. The value is the resolver service, which provides the employee data. When the angular router sees this configuration, it knows it has to prefect the employee list data, before it can activate the LIST route and display it's associated view template.
     */
    resolve:{ postList : postResolver}
  },
  {
    path: 'create',
    component: CreatePostComponent,
    canDeactivate: [PostCanDeactivateGuard]
  },
  {
    path: 'view/:id',
    component: ViewPostComponent,
    canActivate: [postCanActivateGuard]
  },
  /**
   * The path-matching strategy, one of 'prefix' or 'full'. Default is 'prefix'.
    By default, the router checks URL elements from the left to see if the URL matches a given path, and stops when there is a match. For example, '/team/11/user' matches 'team/:id'.

    The path-match strategy 'full' matches against the entire URL. It is important to do this when redirecting empty-path routes. Otherwise, because an empty path is a prefix of any URL, the router would apply the redirect even when navigating to the redirect destination, creating an endless loop.
      */
  { path: '', redirectTo: '/list', pathMatch: 'full' }, // for empty route
  { path: '**', component: PostListComponent } // for any Other invalid route
]

// Pass the configured routes to the forRoot() method
// to let the angular router know about our routes
// Export the imported RouterModule so router directives
// are available to the module that imports this AppRoutingModule

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
