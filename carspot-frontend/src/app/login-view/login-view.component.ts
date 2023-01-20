import {Component, OnInit} from '@angular/core';
import {SessionServiceService} from "../service/session-service.service";
import {ApiServiceService} from "../service/api-service.service";

@Component({
  selector: 'app-login-view',
  templateUrl: './login-view.component.html',
  styleUrls: ['./login-view.component.scss']
})
export class LoginViewComponent implements OnInit {

  public session: SessionServiceService;

  private apiService: ApiServiceService;

  public username: string | undefined;
  public password: string | undefined;

  constructor(session: SessionServiceService, api: ApiServiceService) {
    this.session = session;
    this.apiService = api;
  }

  ngOnInit(): void {
  }


  login() {
    this.apiService.login(this.username, this.password).toPromise()
      .then(data => {
        if (data == null) {
          alert("Wrong username or password");
          return;
        }
        this.session.registerUser(data)
      });
  }

}
