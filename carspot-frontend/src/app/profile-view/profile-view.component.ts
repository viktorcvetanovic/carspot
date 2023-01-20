import {Component, OnInit} from '@angular/core';
import {SessionServiceService} from "../service/session-service.service";

@Component({
  selector: 'app-profile-view',
  templateUrl: './profile-view.component.html',
  styleUrls: ['./profile-view.component.scss']
})
export class ProfileViewComponent implements OnInit {

  public currentUser: any;
  public session: SessionServiceService;

  constructor(session: SessionServiceService) {
    this.session = session;
  }

  ngOnInit(): void {
    this.currentUser = this.session.getUserFromSession();
  }

}
