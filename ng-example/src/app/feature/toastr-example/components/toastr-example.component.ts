import { Component, OnInit } from '@angular/core';
import { ToastrNotificationService } from '../services/toastr-notification.service';

@Component({
  selector: 'app-toastr-example',
  templateUrl: './toastr-example.component.html',
  styleUrls: ['./toastr-example.component.scss']
})
export class ToastrExampleComponent implements OnInit {

  constructor(private notification: ToastrNotificationService) { }

  ngOnInit(): void {
  }

  public Toster_Error() {
    this.notification.error('This is an error');
  }

  public Toster_Warning() {
    this.notification.warning('This is a warning');
  }

  public Toster_Info() {
    this.notification.info('This is a info');
  }

}
