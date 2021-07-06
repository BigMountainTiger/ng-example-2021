import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AgGridExampleRoutingModule } from './ag-grid-example-routing.module';
import { AgGridExampleAComponent } from './components/ag-grid-example-a/ag-grid-example-a.component';
import { AgGridExampleBComponent } from './components/ag-grid-example-b/ag-grid-example-b.component';
import { AgGridLandingComponent } from './components/ag-grid-landing/ag-grid-landing.component';
import { AgGridModule } from 'ag-grid-angular';
import { AgGridExampleContainerComponent } from './components/container/ag-grid-example-container.component';
import { AgGridSortingComponent } from './components/ag-grid-sorting/ag-grid-sorting.component';
import { AgArrayCellComponent } from './renders/ag-array-cell/ag-array-cell.component';
import { AgGridEditingComponent } from './components/ag-grid-editing/ag-grid-editing.component';
import { AgGridEditButtonComponent } from './components/ag-grid-edit-button/ag-grid-edit-button.component';

@NgModule({
  declarations: [
    AgGridExampleContainerComponent,
    AgGridExampleAComponent,
    AgGridExampleBComponent,
    AgGridLandingComponent,
    AgGridSortingComponent,
    AgArrayCellComponent,
    AgGridEditingComponent,
    AgGridEditButtonComponent
  ],
  imports: [
    CommonModule,
    AgGridModule,
    AgGridExampleRoutingModule
  ]
})
export class AgGridExampleModule { }
