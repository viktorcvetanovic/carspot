import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../service/api-service.service";

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  posts:any= [];
  apiService: ApiServiceService;

  constructor(apiService: ApiServiceService) {
    this.apiService = apiService;
  }

  ngOnInit(): void {
    this.getAllPosts();
  }


  getAllPosts() {
    this.apiService.getAllPosts().toPromise().then(data => {
      console.log(data);
      this.posts = data;
    })
  }
}
