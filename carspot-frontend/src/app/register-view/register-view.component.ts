import {Component, OnInit} from '@angular/core';
import {ApiServiceService} from "../service/api-service.service";
import {SessionServiceService} from "../service/session-service.service";
import {User} from "../service/data/User";

@Component({
  selector: 'app-register-view',
  templateUrl: './register-view.component.html',
  styleUrls: ['./register-view.component.scss']
})
export class RegisterViewComponent implements OnInit {

  private apiService: ApiServiceService;
  private sessionService: SessionServiceService;

  public name: string | undefined;
  public username: string | undefined;
  public password: string | undefined;

  public repeatPassword: string | undefined;

  constructor(apiService: ApiServiceService, sessionService: SessionServiceService) {
    this.apiService = apiService;
    this.sessionService = sessionService;
  }

  ngOnInit(): void {
  }


  public register(): void {
    if (this.password != this.repeatPassword) {
      alert("Your password does not match");
      return;
    }
    const user = {
      id: null,
      firstName: this.name,
      lastName: this.name,
      username: this.username,
      password: this.password
    };
    this.apiService.register(user).toPromise()
      .then(data => {
        console.log(data);
        this.sessionService.registerUser(data);
      });
  }

}
