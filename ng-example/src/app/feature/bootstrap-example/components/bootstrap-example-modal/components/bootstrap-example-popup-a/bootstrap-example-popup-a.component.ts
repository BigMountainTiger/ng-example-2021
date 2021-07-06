import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { BootstrapExamplePopupBComponent } from '../bootstrap-example-popup-b/bootstrap-example-popup-b.component';

@Component({
  selector: 'app-bootstrap-example-popup-a',
  templateUrl: './bootstrap-example-popup-a.component.html',
  styleUrls: ['./bootstrap-example-popup-a.component.scss']
})
export class BootstrapExamplePopupAComponent implements OnInit {

  constructor(private modalService: NgbModal,
    private activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  public popUpB() {
    const modal = BootstrapExamplePopupBComponent;
    const option: NgbModalOptions = {
      backdrop : 'static',
      keyboard : false,
      size: 'lg'
    };
    this.modalService.open(modal, option);
  }

  public close() {
    this.activeModal.close();
  }

}
