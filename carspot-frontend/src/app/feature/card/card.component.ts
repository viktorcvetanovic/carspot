import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() public header: any;
  @Input() public desc: any;
  @Input() public img: any;

  constructor() {
  }

  ngOnInit(): void {
  }

}
