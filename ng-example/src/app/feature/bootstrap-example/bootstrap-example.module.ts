import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BootstrapExampleRoutingModule } from './bootstrap-example-routing.module';
import { BootstrapExampleContainerComponent } from './components/container/bootstrap-example-container.component';
import { BootstrapExampleBasicComponent } from './components/bootstrap-example-basic/bootstrap-example-basic.component';
import { BootstrapExampleDatePickerComponent } from './components/bootstrap-example-date-picker/bootstrap-example-date-picker.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { BootstrapExampleModalContainerComponent } from './components/bootstrap-example-modal/components/bootstrap-example-modal-container/bootstrap-example-modal-container.component';
import { BootstrapExamplePopupAComponent } from './components/bootstrap-example-modal/components/bootstrap-example-popup-a/bootstrap-example-popup-a.component';
import { BootstrapExamplePopupBComponent } from './components/bootstrap-example-modal/components/bootstrap-example-popup-b/bootstrap-example-popup-b.component';


@NgModule({
  declarations: [
    BootstrapExampleContainerComponent,
    BootstrapExampleBasicComponent,
    BootstrapExampleDatePickerComponent,
    BootstrapExampleModalContainerComponent,
    BootstrapExamplePopupAComponent,
    BootstrapExamplePopupBComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    BootstrapExampleRoutingModule
  ]
})
export class BootstrapExampleModule { }
