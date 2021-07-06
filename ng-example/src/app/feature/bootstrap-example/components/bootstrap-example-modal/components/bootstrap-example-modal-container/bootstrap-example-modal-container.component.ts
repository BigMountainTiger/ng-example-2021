import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapExamplePopupAComponent } from '../bootstrap-example-popup-a/bootstrap-example-popup-a.component';

@Component({
  selector: 'app-bootstrap-example-modal-container',
  templateUrl: './bootstrap-example-modal-container.component.html',
  styleUrls: ['./bootstrap-example-modal-container.component.scss']
})
export class BootstrapExampleModalContainerComponent implements OnInit {

  constructor(private modalService: NgbModal) { }

  ngOnInit(): void {
  }

  public popUp() {
    const modal = BootstrapExamplePopupAComponent;
    this.modalService.open(modal);
  }

}
