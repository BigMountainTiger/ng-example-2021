import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-bootstrap-example-popup-b',
  templateUrl: './bootstrap-example-popup-b.component.html',
  styleUrls: ['./bootstrap-example-popup-b.component.scss']
})
export class BootstrapExamplePopupBComponent implements OnInit {

  constructor(private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public close() {
    this.activeModal.close();
  }

}
