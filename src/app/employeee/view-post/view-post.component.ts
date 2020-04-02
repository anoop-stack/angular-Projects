import { Component, OnInit } from '@angular/core';
import { PostListService } from 'src/app/service/post-list.service';
import { postListModel } from 'src/app/models/post-list-model';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  public post: postListModel;
  public id: number;
  public loader:boolean;
  constructor(private _postService: PostListService, private _routerActivate: ActivatedRoute, private _router: Router) { }

  ngOnInit() {
    //SnapShot

    // this.id = +this._routerActivate.snapshot.paramMap.get('id'); 

    // adding + type cast string as array , url give string 
    // Not able to detect the url chnage on Run time . so we user other method

    this._routerActivate.params.subscribe((params) => {
      this.id = +params['id'];
      this.getNewPost(this.id);
    })
  }

  public getNewPost(id) {
    this.loader = true;
    this._postService.getSinglePost(id).subscribe((list) => {
      this.post = list;
      this.loader = false;
    });
  }

  public backToList() {
    this._router.navigate(['list'], {
      queryParams: { 'searchTerm': this.id, 'testParam': 'testValue' },
      queryParamsHandling: 'merge'
    })
  }

  /**
   * Query parameters are usually used when you want the parameters on the route to be optional and when you want to retain those parameters across multiple routes.
      * <a [routerLink]="['/employees']"
           [queryParams]="{ 'searchTerm': 'john', 'testParam': 'testValue'}">
            List
        </a>

     Preserve or Merge Query String Parameters : By default, the query string parameters are not preserved or merged when navigating to a different route. To preserve or merge Query Params set queryParamsHandling to either preserve or merge respectively. 

   */
  viewNextPost() {
    this.id += 1;
    this._router.navigate(['view', this.id], {
      // queryParams: { 'searchTerm': this.id, 'testParam': 'testValue' },
     // queryParamsHandling: 'preserve',
      preserveFragment: true,

    });
  }

  viewPreviousPost() {
    if (this.id !== 0 && this.id > 0) {
      this.id -= 1;
    } else {
      this.id = 1;
    }
    this._router.navigate(['view', this.id]);
  }

  public updatePost(){
    this._router.navigate(['create']);
    this._postService.sendPost(this.post);

  }

  /**
   * there are 2 type of approch to read the router url.
   * 1)snapshot
   * 2)params.subscribe method
   * 
   * snapshot , it work fine when we just have to navgiate to the other component having , but fail when we chnage the url , it is like the next button
   * 
   * When to use snapshot over observable while reading route parameter values : Use snapshot approach if the route parameter value does not change and you only want to read the initial route parameter value. On the other hand, if you know the route parameter value changes, and if you want to react and execute some code in response to that change, then use the Observable approach.
   */
}
