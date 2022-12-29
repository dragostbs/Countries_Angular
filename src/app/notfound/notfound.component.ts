import { Component } from '@angular/core';
import { NgbAlertConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.scss'],
})
export class NotfoundComponent {
  constructor(alertConfig: NgbAlertConfig) {
    alertConfig.type = 'danger';
    alertConfig.dismissible = false;
  }
}
