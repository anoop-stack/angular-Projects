import { Component, OnInit } from '@angular/core';
import { FormBuilder, NgForm, FormGroup, FormControl } from '@angular/forms';
import { PostListService } from 'src/app/service/post-list.service';
import { postListModel } from 'src/app/models/post-list-model';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  constructor(private _fb: FormBuilder, private _postService: PostListService, ) { }

  public postForm: FormGroup;
  public postValue: postListModel;

  ngOnInit() {
    this._postService.sendPost$.subscribe((val: postListModel) => {
      this.postValue = val;

    });

    console.log(this.postValue)
    if (!this.postValue) {
      this.createForm();
    } else {
      this.initForm(this.postValue);
    }



  }

  createForm() {
    console.log(this.postValue)
    this.postForm = new FormGroup({
      'userId': new FormControl(1),
      'title': new FormControl('new title'),
      'body': new FormControl('new boody'),
    });
  }

  initForm(post) {
    this.postForm.setValue(post)
  }


  public submit(post) {
    console.log(post)
  }

}
