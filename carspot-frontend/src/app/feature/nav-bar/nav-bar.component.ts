import {Component, OnInit} from '@angular/core';
import {SessionServiceService} from "../../service/session-service.service";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  public session: SessionServiceService;

  constructor(session: SessionServiceService) {
    this.session = session;
  }

  ngOnInit(): void {

  }

}
