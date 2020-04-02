import { Component, OnInit } from '@angular/core';
import { PostListService } from 'src/app/service/post-list.service';
import { postListModel } from 'src/app/models/post-list-model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  public postList: postListModel[] = [];
  public selectedPost: number;
  constructor(private _postService: PostListService,
    private _router: Router,
    private _activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.selectedPost = +this._activeRoute.snapshot.queryParamMap.get('searchTerm');

    //to implement the resolver gurd.
    this.postList = this._activeRoute.snapshot.data['postList'];


  }

  viewPost(post: postListModel) {
    /**
     * post.id is the requried param
     */
    this._router.navigate(['view', post.id]);
  }
}
