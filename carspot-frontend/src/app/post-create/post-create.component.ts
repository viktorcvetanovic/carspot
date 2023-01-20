import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../service/api-service.service";
import {SessionServiceService} from "../service/session-service.service";

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {

  private apiService: ApiServiceService;
  private session: SessionServiceService;

  public postName: string | undefined;
  public postDesc: string | undefined;
  public postImg: string | undefined;

  constructor(apiService: ApiServiceService, session: SessionServiceService) {
    this.apiService = apiService;
    this.session = session;
  }

  ngOnInit(): void {
  }

  createPost() {
    const currentUser = this.session.getUserFromSession();
    // @ts-ignore
    const post = {
      id: null,
      postName: this.postName,
      postDesc: this.postDesc,
      img: this.postImg,
      userFk: currentUser?.id
    }

    this.apiService.createPost(post).toPromise()
      .then(data => console.log(data));
  }

}
